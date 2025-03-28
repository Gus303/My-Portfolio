import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi"
import Photo from "@/components/Photo";
import Social from "@/components/Social";


export default function Home() {
  return (
 <section className="h-full ml-[15px] mr-[15px]">
  <div className="container mx-auto h-full">
    <div className="flex flex-col md:flex-row items-center justify-between xl:pt-8 xl:pb-24">
      <div className="text-center md:text-left order-2 md:order-none">
        <span className="xl:text-[18px] font-semibold">Web Developer</span>
        <h1 className="text-[58px] xl:text-[78px] leading-[1.1] font-semibold mb-15">Hello,
        <br />  
        <span className="text-sky-400">Be Welcome</span></h1>

        <div className="mb-15">
        <h2 className="text-[18px] xl:text-[21px] leading-[1.1] font-semibold">How to Contact Me:</h2>

        <div className="mb-8 md:mb-0 mt-6 flex items-center justify-center md:items-start md:justify-start">
        <Social containerStyles='flex gap-6' iconsStyles='w-12 h-12 text-2xl border-2 border-accent rounded-full flex justify-center items-center text-accent hover:bg-white hover:text-black hover:transition-all duration-500' />
        </div>

        </div>

      <div className="flex flex-col md:flex-row items-center mb-15">
      <Button className="flex items-center gap-2 cursor-pointer hover:text-black hover:bg-white duration-500 hover:transition-all">
        <span>Download CV</span>
        <FiDownload className="text-xl" />
      </Button>
      </div>
      </div>
      <div className="order-1 md:order-none mb-8 md:mb-0">
        <Photo />
      </div>
    </div>
  </div>
 </section>
  );
}
