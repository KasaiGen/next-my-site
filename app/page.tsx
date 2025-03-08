import Image from "next/image";
import Link from "next/link";
import profilePic from "../public/images/me-pic.jpg";
import heroPic from "../public/images/header.jpg";

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
        {/* <h3>Bullet Group Inc.</h3> */}
      </div>
    </div>
    <div className="container">
      <div className="profile">
        <div>
          <h2>河西玄太</h2>
          <p>出身：山梨県<br />
          4年制の情報系専門学校に在学中です。<br />
          </p>
          <p>好きなもの：餃子・ラーメン<br/>
          今年中に、餃子の王将のプラチナ会員になることが目標です。
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
        </div>
      </div>
      <div className="learning">
        <h2>Learning</h2>
        <div className="skillsContainer">
        <div>
            <img src="/images/next_2.svg" alt="next" />
            <span>Next.js</span>
          </div>
          <div>
            <img src="/images/typescript.svg" alt="next" />
            <span>Typescript</span>
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