import { StopIcon } from "@heroicons/react/24/solid"
import Image from "next/image"

const Footer = () => (
  <footer className="h-60 w-full border-t border-gray-800 px-6">
    <main className="flex h-full w-full flex-col">
      <div className="flex w-full flex-grow justify-between gap-12 py-8">
        <aside className="flex flex-grow items-start gap-6">
          <section className="flex max-w-sm flex-grow items-center">
            <StopIcon className="h-6 w-6 text-white" />
            <p className="font-bold">kairo</p>
          </section>
          <section className="flex gap-6 text-sm">
            <ul className="flex flex-col gap-3">
              <li className="cursor-pointer opacity-75 hover:opacity-100">
                Home
              </li>
              <li className="cursor-pointer opacity-75 hover:opacity-100">
                About
              </li>
              <li className="cursor-pointer opacity-75 hover:opacity-100">
                Terms & Conditions
              </li>
              <li className="cursor-pointer opacity-75 hover:opacity-100">
                Shipping & Return Policy
              </li>
            </ul>
            <ul className="flex flex-col gap-3">
              <li className="cursor-pointer opacity-75 hover:opacity-100">
                Privacy Policy
              </li>
              <li className="cursor-pointer opacity-75 hover:opacity-100">
                FAQ
              </li>
            </ul>
          </section>
        </aside>
        <div>A</div>
      </div>
      <aside className="flex h-10 w-full flex-shrink-0 items-center justify-between border-t-2 border-white pb-1">
        <p className="text-xs">
          <b>{new Date().getFullYear()}</b> All rights reserved.
        </p>
        <p className="text-xs">Xenoverse & Kairo Inc.</p>
      </aside>
    </main>
  </footer>
)
export default Footer
