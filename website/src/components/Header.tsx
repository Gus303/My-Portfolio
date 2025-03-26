import Link from "next/link"
import { Button } from "./ui/button"
import Navbar from "./Navbar"
import Mobilebar from "./Mobilebar"

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white bg-blue-50/10">
        <div className="container p-2 mx-auto flex justify-between items-center">
            <Link href='/'>
            <h1 className="text-4xl font-semibold">Gus<span className="text-sky-400">3</span>0<span className="text-sky-400">3</span></h1>
            </Link>
            <div className="hidden md:flex items-center gap-8">
            <Navbar />
            <Link href="/">
            <Button>Hire me</Button>
            </Link>
            </div>

            <div className="md:hidden">
            <Mobilebar />
            </div>
        </div>
    </header>
  )
}

export default Header
