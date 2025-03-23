"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Pagination from "../components/pagination";

// export const metadata = {
//     title: "Blogs",
//     description: "ブログページです",
// };

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchBlogs = async () => {
            const res = await fetch(`/api/blogs?q=${searchQuery}`);
            const data = await res.json();
            setBlogs(data.blogs);
        };
        fetchBlogs();
    }, [searchQuery]);

    return (
        <>
            <div className="wrapper">
                <div className="container">
                    <h1>Blog Page</h1>
                    <p>何か記事を残していこうと思います。</p>

                    {/* 検索フォーム */}
                    <input
                        type="text"
                        placeholder="検索..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="searchInput"
                    />

                    {blogs.map((blog, index) => (
                        <div key={index} className="blogCard">
                            <div className="cardContainer">
                                <h2>{blog.frontmatter.title}</h2>
                                <p>{blog.frontmatter.excerpt}</p>
                                <p>{blog.frontmatter.date}</p>
                                <Link href={`/blog/${blog.slug}`}>Read More</Link>
                            </div>
                            <div className="blogImg">
                                <Image
                                    src={blog.frontmatter.image}
                                    alt="card-image"
                                    height={300}
                                    width={1000}
                                    quality={90}
                                    priority={true}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Blog;
