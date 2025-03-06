import Image from "next/image";
import Link from "next/link";
import profilePic from "../public/images/me-pic.jpg";
import heroPic from "../public/images/index-hero.jpg";

export const metadata = {
  title: "Kasai Genta",
  description: "Kasai Gentaのポートフォリオサイトです",
}
const Index = () =>{
  return (
    <> 
    <div className="hero">
      <Image src={heroPic} alt="hero" />
      <div className="textContainer">
        <h1>I'm Kasai Genta</h1>
        <h3>Bullet Group Inc.</h3>
      </div>
    </div>
    <div className="container">
      <div className="profile">
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
      <div className="skills">
        <h2>Skills</h2>
        <div className="skillsContainer">
          <div>
            <img src="/images/javascript_2.svg" alt="javascript" />
            <span>Javascript</span>
          </div>
          <div>
            <img src="/images/react_2.svg" alt="react" />
            <span>React</span>
          </div>
          <div>
            <img src="/images/next_2.svg" alt="next" />
            <span>Next.js</span>
          </div>
        </div>
      </div>
      <div className="ctaButton">
        <Link href="/contact">Contact</Link>
      </div>
    </div>
    </>
  );
}
export default Index;