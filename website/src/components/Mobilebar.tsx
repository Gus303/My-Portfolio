'use client';
import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet'
import Link from 'next/link';
import { usePathname } from "next/navigation"
import { CiMenuFries } from 'react-icons/ci'

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

const Mobilebar = () => {
    const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className='flex justify-center items-center'>
        <CiMenuFries className='text-[32px] text-white cursor-pointer' />
      </SheetTrigger>
      <SheetContent className='flex flex-col'>
        <nav className='mt-50 flex flex-col justify-center items-center gap-8'>
        {links.map((link, index)=> {
      return <Link href={link.path} key={index} className={`${link.path === pathname && "text-sky-400 border-sky-400 border-b-2"} capitalize font-medium hover:text-sky-300 transition-all`}>
        {link.name}
      </Link>
    })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default Mobilebar
