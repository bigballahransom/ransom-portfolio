import Footer from "@/components/custom/Footer";
import Hero from "@/components/custom/Hero";
import Navbar from "@/components/custom/Navbar";
import Box from "@/components/custom/Box";
import Image from "next/image";
import Me from "@/components/custom/Me";
import Tech from "@/components/custom/Tech";

export default function Home() {
  return (
    <main className=" ">
    <Navbar/>
    <Box/>
    <Hero/>
    <Tech/>
    <Me/>
      <Footer/>
    </main>
  );
}
