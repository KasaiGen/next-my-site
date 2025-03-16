import "./styles/fadeIn.css";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "./components/fadeIn"; 
import profilePic from "../public/images/me-pic.jpg";
import heroPic from "../public/images/header.jpg";

export const metadata = {
  title: "Kasai Genta",
  description: "Kasai Gentaのポートフォリオサイトです",
};

const Index = () => {
  return (
    <>
      <div className="hero">
        <Image src={heroPic} alt="hero" />
        <div className="textContainer">
          <h1>I'm Kasai Genta</h1>
        </div>
      </div>
      <div className="container">
        <div className="profile">
          <div>
            <h2>河西玄太</h2>
            <p>出身：山梨県<br />4年制の情報系専門学校に在学中です。</p>
            <p>好きなもの：餃子・ラーメン<br />今年中に、餃子の王将のプラチナ会員になることが目標です。</p>
          </div>
          <div>
            <Image src={profilePic} alt="profile" />
          </div>
        </div>
        <div className="skills">
          <h2>Skills</h2>
          <div className="skillsContainer">
            <FadeIn direction="left">
              <img src="/images/javascript_2.svg" alt="javascript" />
              <span>JavaScript</span>
            </FadeIn>
            <FadeIn direction="right">
              <img src="/images/react_2.svg" alt="react" />
              <span>React</span>
            </FadeIn>
          </div>
        </div>
        <div className="learning">
          <h2>Learning</h2>
          <div className="skillsContainer">
            <FadeIn direction="left">
              <img src="/images/next_2.svg" alt="next" />
              <span>Next.js</span>
            </FadeIn>
            <FadeIn direction="right">
              <img src="/images/typescript.svg" alt="next" />
              <span>TypeScript</span>
            </FadeIn>
          </div>
        </div>
        <div className="ctaButton">
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </>
  );
};

export default Index;
