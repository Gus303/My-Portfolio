'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home" ,
    path: "/"
  },
  {
    name: "services" ,
    path: "/Services"
  },
  {
    name: "aboutme" ,
    path: "/AboutMe"
  },
  {
    name: "work" ,
    path: "/Work"
  },
  {
    name: "contact" ,
    path: "/Contact"
  },
]

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname)
  return (
    <>
   <nav className="flex gap-8">
    {links.map((link, index)=> {
      return <Link href={link.path} key={index} className={`${link.path === pathname && "text-teal-400 border-teal-400 border-b-2"} capitalize font-medium hover:text-teal-400 transition-all`}>
        {link.name}
      </Link>
    })}
   </nav>
    </>
  )
}

export default Navbar
