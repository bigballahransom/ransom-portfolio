import Footer from "@/components/custom/Footer";
import Hero from "@/components/custom/Hero";
import Navbar from "@/components/custom/Navbar";
import Box from "@/components/custom/Box";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" ">
    <Navbar/>
    <Box/>
    <Hero/>
    <div className='pt-16'>
    <p className='heading'>hi from Andrew</p>
    <p className='subheading'>hi from Andrew</p>
      <p className='paragraph'>hi from Andrew</p>hi from Andrew
      </div>
      <Footer/>
    </main>
  );
}
