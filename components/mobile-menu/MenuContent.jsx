import Link from "next/link"
import MenuCategories from "./MenuCategories"
import MenuContentWrapper from "./MenuContentWrapper"

const MenuContent = () => (
  <MenuContentWrapper>
    <Link href="/" className="cursor-pointer">
      Home
    </Link>
    <Link href="/about" className="cursor-pointer pb-3">
      About
    </Link>
    <MenuCategories />
  </MenuContentWrapper>
)

export default MenuContent
