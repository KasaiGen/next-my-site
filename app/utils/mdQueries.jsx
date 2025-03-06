import fs from 'fs'; //ファイルシステムを操作するためのモジュール
import path from 'path';
import matter from 'gray-matter'; //ファイルの内容を解析するためのモジュール

export const blogsPerPage = 5;
// 非同期関数(async)を使って、dataフォルダにある全てのブログを取得する関数を作成
export async function getAllBlogs(){
    const files = fs.readdirSync(path.join("data"));
    const blogs = files.map((fileName) => {
        const slug = fileName.replace(".md","");
        const fileData = fs.readFileSync(path.join("data",fileName),"utf-8");
        const {data} = matter(fileData);
        return {
            frontmatter: data,
            slug: slug
        }
    })

    const orderedBlogs = blogs.sort((a,b) => {
        return b.frontmatter.id - a.frontmatter.id
    })
    const numberPages = Math.ceil(orderedBlogs.length / blogsPerPage)
    return {
        blogs: orderedBlogs,
        numberPages: numberPages
    }
}
export async function getSingleBlog(context) {
    const { slug } = await context.params;
    const data = await import(`../../data/${slug}.md`)
    const singleDocument = matter(data.default)
    return {
        singleDocument: singleDocument
    }
}
