import Image from "next/image"
import Link from "next/link"
import SearchBar from "@/components/molecules/SearchBar"
import { StopIcon } from "@heroicons/react/24/solid"
import Cart from "@/components/layout/Cart"
import MobileMenu from "@/components/molecules/MobileMenu"

const Nav = () => (
  <nav className="flex h-16 items-center justify-between border-b border-gray-800 bg-black px-6">
    <MobileMenu />
    <header className="flex items-center gap-7">
      <Link href="/" className="flex items-center gap-1">
        <StopIcon className="h-6 w-6 text-white" />
        <p className="font-bold">kairo</p>
      </Link>
      <div className="hidden gap-3 text-sm md:flex">
        <Link className="font-extrabold" href="/products">
          All
        </Link>
        <Link href="/products?category=electric">Electric</Link>
        <Link href="/products?category=acoustic">Acoustic</Link>
      </div>
    </header>
    <SearchBar />
    <Cart />
  </nav>
)
export default Nav
