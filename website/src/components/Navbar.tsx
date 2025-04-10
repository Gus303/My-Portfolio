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
      return <Link href={link.path} key={index} className={`${link.path === pathname && "text-sky-400 border-sky-400 border-b-2"} capitalize font-medium hover:scale-110 hover:-translate-y-0.5 hover:text-sky-300 transition-all duration-300`}>
        {link.name}
      </Link>
    })}
   </nav>
    </>
  )
}

export default Navbar
