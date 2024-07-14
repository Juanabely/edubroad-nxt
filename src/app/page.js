import Nav from '../components/Nav'
import Image from "next/image";
import Hero from "./Hero/Hero";
import Interest from "./Interest/Interest";
import ChooseUS from "./ChooseUs/ChooseUS";
import Top from "./Top/Top";
import ContactUs from "./ContactUS/ContactUs";
import Footer from "./Footer/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Nav/>
     <Hero/>
     <div id="about" className="flex justify-center gap-[22rem] items-center mt-4">
      <Image src="./Pattern1.svg" width={150} height={150} className=" max-[450px]:hidden"/>
      <span className="text-[#0F2F64] text-4xl font-medium max-w-[400px]">We are an international education portal with over 10 years of experience</span>
      <Image src={'./Pattern2.svg'} width={150} height={150} className=" max-[450px]:hidden"/>
     </div>
     <Interest/>
     <ChooseUS/>
     <Top/>
     <ContactUs/>
     <Footer/>
    </main>
  );
}
