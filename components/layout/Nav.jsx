import Image from "next/image"
import Link from "next/link"
import SearchBar from "@/components/molecules/SearchBar"
import { ShoppingBagIcon } from "@heroicons/react/24/outline"
import { StopIcon } from "@heroicons/react/24/solid"
import Cart from "@/components/layout/Cart"

const Nav = () => (
  <nav className="bg-black h-16 flex items-center justify-between px-6 border-b border-gray-800">
    <header className="flex gap-7 items-center">
      <Link href="/" className="flex items-center gap-1">
        <StopIcon className="w-6 h-6 text-white" />
        <p className="font-bold">KAIRO</p>
      </Link>
      <div className="flex gap-3">
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
