import Link from "next/link"
import { HorizontalSeparator } from "@/components/molecules/Separator"

const MenuFooter = () => (
  <footer className="flex flex-shrink-0 flex-col space-y-4 text-xs">
    <section className="flex flex-col space-y-1 text-[0.7rem]">
      <Link href="" className="cursor-pointer opacity-75 hover:opacity-100">
        Frequently Asked Questions
      </Link>
      <Link href="" className="cursor-pointer opacity-75 hover:opacity-100">
        Shipping & Return Policy
      </Link>
      <Link href="" className="cursor-pointer opacity-75 hover:opacity-100">
        Privacy Policy
      </Link>
      <Link href="" className="cursor-pointer opacity-75 hover:opacity-100">
        Terms & Conditions
      </Link>
    </section>
    <HorizontalSeparator />
    <span>
      <b>{new Date().getFullYear()}</b> Xenoverse & Kairo Incorporation
    </span>
  </footer>
)

export default MenuFooter
