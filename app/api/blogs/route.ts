import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function GET(req: Request) {
    const url = new URL(req.url);
    const searchQuery = url.searchParams.get("q")?.toLowerCase() || "";

    const files = fs.readdirSync(path.join("data"));
    let blogs = files.map((fileName) => {
        const slug = fileName.replace(".md", "");
        const fileData = fs.readFileSync(path.join("data", fileName), "utf-8");
        const { data } = matter(fileData);
        return {
            frontmatter: data,
            slug: slug,
        };
    });

    // 検索キーワードがある場合、タイトルと説明に基づいてフィルタリング
    if (searchQuery) {
        blogs = blogs.filter((blog) =>
            blog.frontmatter.title.toLowerCase().includes(searchQuery) ||
            blog.frontmatter.excerpt.toLowerCase().includes(searchQuery)
        );
    }

    return NextResponse.json({ blogs });
}
