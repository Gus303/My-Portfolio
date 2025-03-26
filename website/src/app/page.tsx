import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi"

export default function Home() {
  return (
 <section className="h-full">
  <div className="container mx-auto h-full">
    <div className="flex flex-col md:flex-row items-center justify-between xl:pt-8 xl:pb-24">
      <div className="text-center md:text-left">
        <span className="xl:text-[18px] font-semibold">Web Developer</span>
        <h1 className="text-[58px] xl:text-[78px] leading-[1.1] font-semibold mb-15">Hello,
        <br />  
        <span className="text-sky-400">Be Welcome</span></h1>

        <div className="mb-15">
        <h2 className="text-[18px] xl:text-[21px] leading-[1.1] font-semibold">How to Contact Me:</h2>
        
        </div>

      <div className="flex flex-col md:flex-row items-center mb-15">
      <Button className="flex items-center gap-2 cursor-pointer hover:text-sky-500 hover:border-sky-500 delay-150 duration-150">
        <span>Download CV</span>
        <FiDownload className="text-xl" />
      </Button>
      </div>
      </div>
      <div>photo</div>
    </div>
  </div>
 </section>
  );
}
