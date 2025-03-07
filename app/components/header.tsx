import Image from "next/image";
import Link from "next/link";
import logoImage from "../../public/images/logo_4.png";

const Header =()=>{
    return(
        <>
        <header>
            <div className="container">
                <div>
                    <Link href="/">
                    <Image src={logoImage} alt="logo"></Image>
                    </Link>
                    <ul>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </header>
        </>
    )
}
export default Header;