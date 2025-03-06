import Link from 'next/link';
import Image from 'next/image';
import { getAllBlogs } from '../utils/mdQueries';

const Blog = async() => {
    const {blogs} = await getAllBlogs();
    console.log(blogs);
    return (
        <>
        <div className='wrapper'>
            <div className='contaienr'>
                <h1>Blog page.</h1>
                <p>記事を残していきます。</p>
                {blogs.map((blog,Index) => 
                    <div key={Index} className='blogCard'>
                        <div className='cardContainer'>
                            <h2>{blog.frontmatter.title}</h2>
                            <p>{blog.frontmatter.except}</p>
                            <p>{blog.frontmatter.date}</p>
                            <Link href={`/blog/${blog.slug}`}>Read More</Link>
                        </div>
                        <div className='blogImg'>
                            <Image src={blog.frontmatter.image} alt="card-image" 
                            height={300} width={1000} qualiy={90} priority={true} />
                        </div>
                    </div>
                )}
            </div>
        </div>
        </>
    )
}
export default Blog;