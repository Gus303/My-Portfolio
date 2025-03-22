import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav 
      className=' w-full fixed px-5 lg:px-12 xl:px-[8%] py-4 flex items-center justify-between z-50 '>
        <a href="#top">
            <h2 className='  '>Gustavo</h2>
        </a>
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3'>
            <li>
                <a href="#Top">Home</a>
            </li>
            <li>
                <a href="#About">About Me</a>
            </li>
            <li>
                <a href="#Projects">Projects</a>
            </li>
            <li>
                <a href="#Contact">Contact</a>
            </li>
        </ul>
        <div className='flex items-center gap-4'>

            <button className='block md:hidden ml-1'>
                <Image src="image/menu.svg" width={30} height={30} alt='moon' />
            </button>
        </div>

        <ul className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-0 top-0 bottom-0 w-64 z-50 h-screen bg-amber-200 transition duration-500'>

            <div>
                <Image />
            </div>

            <li>
                <a href="#Top">Home</a>
            </li>
            <li>
                <a href="#About">About Me</a>
            </li>
            <li>
                <a href="#Projects">Projects</a>
            </li>
            <li>
                <a href="#Contact">Contact</a>
            </li>
        </ul>

      </nav>
    </>
  )
}

export default Navbar
