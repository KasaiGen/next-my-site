import Image from "next/image";
import Link from "next/link";
import profilePic from "../public/images/profile.jpg";
import heroPic from "../public/images/index-hero.jpg";

const Index = () =>{
  return (
    <> 
    <div>
      <Image src={heroPic} alt="hero" />
      <div>
        <h1>I'm Kasai Genta</h1>
        <h3>Bullet Group Inc.</h3>
      </div>
    </div>
    <div>
      <div>
        <div>
          <h2>Student</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div>
          <Image src={profilePic} alt="profile" />
        </div>
      </div>
      <div>
        <h2>Skills</h2>
        <div>
          <div>
            <img src="/images/javascript.svg" alt="javascript" />
            <span>Javascript</span>
          </div>
          <div>
            <img src="/images/react.svg" alt="react" />
            <span>React</span>
          </div>
          <div>
            <img src="/images/next.svg" alt="next" />
            <span>Next.js</span>
          </div>
          <div>
            <img src="/images/gatsby.svg" alt="gatsby" />
            <span>Gatsby</span>
          </div>
        </div>
      </div>
      <div>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
    </>
  );
}
export default Index;