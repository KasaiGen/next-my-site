import fs from 'fs'; //ファイルシステムを操作するためのモジュール
import path from 'path';
import matter from 'gray-matter'; //ファイルの内容を解析するためのモジュール
import Link from 'next/link';
import Image from 'next/image';

// 非同期関数(async)を使って、dataフォルダにある全てのブログを取得する関数を作成
async function getAllBlogs(){

    // fs.readdirSync() 指定したディレクトリ内のファイル名を取得する関数
    const files = fs.readdirSync(path.join("data")); //process.cwd(); カレントディレクトリ(Curent Working Directory)を取得
    const blogs = files.map((fileName) => {
        const slug = fileName.replace(".md",""); //ファイル名から拡張子を削除
        const fileData = fs.readFileSync(
            path.join("data",fileName),
            "utf-8"
        );
        const { data } = matter(fileData) 
        return {
            frontmatter: data,
            slug: slug
        }
    });
    const orderedBlogs = blogs.sort((a,b) => {
        return b.frontmatter.id - a.frontmatter.id
    });
    return{
        blogs: orderedBlogs
    }
}
const Blog = async() => {
    const {blogs} = await getAllBlogs();
    console.log(blogs);
    return (
        <>
        <div>
            <h1>Blog page.</h1>
            <p>バレットグループ インターン記録</p>
            {blogs.map((blog,Index) => 
                <div key={Index}>
                    <div>
                        <h2>{blog.frontmatter.title}</h2>
                        <p>{blog.frontmatter.except}</p>
                        <p>{blog.frontmatter.date}</p>
                        <Link href={`/blog/${blog.slug}`}>Read More</Link>
                    </div>
                    <div>
                        <Image src={blog.frontmatter.image} alt="card-image" 
                        height={300} width={1000} qualiy={90} priority={true} />
                    </div>
                </div>
            )}
        </div>
        </>
    )
}
export default Blog;