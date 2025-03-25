import Link from "next/link"
import { Button } from "./ui/button"
import Navbar from "./Navbar"

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white bg-blue-50/10">
        <div className="container mx-auto">
            <Link href='/'>
            <h1 className="text-4xl font-semibold">Gus<span className="text-blue-500">.</span></h1>
            </Link>
            <div className="hidden xl:flex">
            <Navbar />
            <Link href="/">
            <Button>Hire me</Button>
            </Link>
            </div>

            <div className="">

            </div>
        </div>
    </header>
  )
}

export default Header
