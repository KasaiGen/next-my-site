import Image from "next/image";
import Link from "next/link";

const Index = () =>{
  return (
    <>
    <div>
      <h1>Hello.</h1>
      <Link href="/contact">Move to Contact page.</Link><br />
      <Link href="/blog">Move to Blog page.</Link>
    </div>
    </>
  );
}
export default Index;