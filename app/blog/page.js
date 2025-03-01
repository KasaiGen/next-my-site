import fs from 'fs'; //ファイルシステムを操作するためのモジュール
import path from 'path';
import matter from 'gray-matter'; //ファイルの内容を解析するためのモジュール
import Link from 'next/link';

// 非同期関数(async)を使って、dataフォルダにある全てのブログを取得する関数を作成
async function getAllBlogs(){

    // fs.readdirSync() 指定したディレクトリ内のファイル名を取得する関数
    const files = fs.readdirSync(path.join(process.cwd(),"app","data")); //process.cwd(); カレントディレクトリ(Curent Working Directory)を取得
    const blogs = files.map((fileName) => {
        const slug = fileName.replace(".md",""); //ファイル名から拡張子を削除
        const fileData = fs.readFileSync(
            path.join(process.cwd(),"app","data",fileName),
            "utf-8"
        );
        const { data } = matter(fileData) 
        return {
            frontmatter: data,
            sulug: slug
        }
    });
    return{
        blogs:blogs
    }
}
const Blog = async() => {
    const {blogs} = await getAllBlogs();
    console.log(blogs);
    return (
        <>
        <div>
            <h1>Blog page.</h1>
            {blogs.map((blog,Index) => 
                <div key={Index}>
                    <h2>{blog.frontmatter.title}</h2>
                    <p>{blog.frontmatter.date}</p>
                    <Link href={`/blog/${blog.slug}`}>Read More</Link>
                </div>
            )}
        </div>
        </>
    )
}
export default Blog;