import Topbar from "@/components/topbar";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Editor from "@/components/editor";
import Bestproduct from "@/components/bestproduct";
import Vita from "@/components/vita";
import Neural from "@/components/neural";
import Practice from "@/components/practice";
import Footer from "@/components/footer";
export default async function Home() {
  const fetchdata = await fetch("https://dummyjson.com/products")
  const response = await fetchdata.json()
  return (
    <div>
    <Topbar/>
    <Header/>
    <Hero/>
    <Editor/>
    <Bestproduct/>
    <Vita/>
    <Neural/>
    <Practice/>
    <Footer/>
    </div>
  );
}
