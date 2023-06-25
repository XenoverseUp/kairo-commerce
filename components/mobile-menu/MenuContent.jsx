import Link from "next/link"
import MenuCategories from "./MenuCategories"
import { HorizontalSeparator } from "../molecules/Separator"

const MenuContent = () => (
  <section className="mt-4 flex flex-grow flex-col space-y-2">
    <Link href="" className="cursor-pointer">
      Home
    </Link>
    <Link href="" className="cursor-pointer pb-3">
      About
    </Link>
    <MenuCategories />
  </section>
)

export default MenuContent
