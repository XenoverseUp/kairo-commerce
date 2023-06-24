import { StopIcon } from "@heroicons/react/24/solid"
import Image from "next/image"

const Footer = () => (
  <footer className="w-full h-60 border-t border-gray-800 px-6">
    <main className="flex flex-col w-full h-full">
      <div className="flex-grow w-full flex justify-between py-8 gap-12">
        <aside className="flex gap-6 flex-grow items-start">
          <section className="flex items-center flex-grow max-w-sm">
            <StopIcon className="text-white w-6 h-6" />
            <p className="font-bold">KAIRO</p>
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
      <aside className="h-10 pb-1 w-full border-t-2 border-white flex flex-shrink-0 items-center justify-between">
        <p className="text-xs">
          <b>{new Date().getFullYear()}</b> All rights reserved.
        </p>
        <p className="text-xs">Xenoverse & Kairo Inc.</p>
      </aside>
    </main>
  </footer>
)
export default Footer
