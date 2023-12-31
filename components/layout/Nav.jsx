import Link from "next/link"
import SearchBar from "@/components/molecules/SearchBar"
import { StopIcon } from "@heroicons/react/24/solid"
import Cart from "@/components/layout/Cart"
import MobileMenu from "@/components/layout/MobileMenu"
import MenuContent from "@/components/mobile-menu/MenuContent"

const Nav = () => (
  <nav className="flex h-16 items-center justify-between border-b border-gray-800 bg-black px-6">
    <MobileMenu>
      <MenuContent />
    </MobileMenu>
    <header className="flex items-center gap-7">
      <Link href="/" className="flex items-center gap-1">
        <StopIcon className="h-6 w-6 text-white" />
        <p className="font-bold">kairo</p>
      </Link>
      <div className="hidden gap-3 text-sm md:flex">
        <Link className="font-extrabold" href="/all">
          All
        </Link>
        <Link href="/electric">Electric</Link>
        <Link href="/acoustic">Acoustic</Link>
      </div>
    </header>
    <div className="hidden w-96 sm:block">
      <SearchBar />
    </div>
    <Cart />
  </nav>
)
export default Nav
