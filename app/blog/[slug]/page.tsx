import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { getAllBlogs,getSingleBlog } from '../../utils/mdQueries';
import PrevNext from "../../components/prevNext";

export async function generateMetadata(props : any) {
    const {singleDocument} = await getSingleBlog(props);
    return {
        title: singleDocument.data.title,
        description:singleDocument.data.excerpt,
    }
}
const SingleBlog = async(props : any) =>{
    const {singleDocument} = await getSingleBlog(props);
    const {blogs} = await getAllBlogs();
    // 戻るページ
    const prev = blogs.filter(blog => blog.frontmatter.id === 
        singleDocument.data.id -1)
    // 次のページ
    const next = blogs.filter(blog => blog.frontmatter.id === 
        singleDocument.data.id + 1)
    return (
        <>
        <div className='img-container'>
            <Image src={singleDocument.data.image} alt="blog-image" height={500} width={1000} quality={90} priority={true}/>
        </div>
        <div className='wrapper'>
            <div className='container'>
                <h1>{singleDocument.data.title}</h1>
                <p>{singleDocument.data.date}</p> 
                <ReactMarkdown>{singleDocument.content}</ReactMarkdown>
            </div>
            <PrevNext prev={prev} next={next}/>
        </div>
        </>
    )
}
export default SingleBlog;
export async function generateStaticParams() {
    const {blogs} = await getAllBlogs();
    const paths = blogs.map((blog : any) => ({
        params: { slug: blog.slug }
    }));

    return paths;
}
