import Link from "next/link";

const Footer = () => {
    return (
        <>
        <footer>
            <div>
                <a href="https://github.com/KasaiGen"><img src="/images/github_2.svg" alt="logo"/></a>
                <a href="https://x.com/26_ksi"><img src="/images/x.svg" alt="logo"/></a>
                <a href="https://www.instagram.com/kasa_2026/"><img src="/images/instagram.svg" alt="logo" /></a>
                <hr/>
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact</Link>
                <p>©{new Date().getFullYear()} Abe Hiroki</p>
            </div>
        </footer>
        </>
    )
}
export default Footer;