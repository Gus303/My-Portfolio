import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi"

export default function Home() {
  return (
 <section className="h-full">
  <div className="container mx-auto h-full">
    <div className="flex flex-col md:flex-row items-center justify-between xl:pt-8 xl:pb-24">
      <div className="text-center md:text-left">
        <span>Web Developer</span>
        <h1>Hello,
        <br />  
        <span>Be Welcome</span></h1>
        
      </div>
      <div>photo</div>
    </div>
  </div>
 </section>
  );
}
