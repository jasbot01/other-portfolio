import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Header from "@/components/Header";
import Work from "@/components/Work";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar/> 
    <Header/>
    <About/>
    <Work/> 
    </>    
  );
}
