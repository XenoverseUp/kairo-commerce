"use client"

import { ShoppingBagIcon } from "@heroicons/react/24/outline"
import {
  Overlay,
  Portal,
  Root,
  Trigger,
  Content,
  Close,
  Description,
  Title,
} from "@radix-ui/react-dialog"
import { Fragment, useRef, useState } from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"
import { Transition } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/solid"
import { useHotkeys } from "react-hotkeys-hook"
import * as ScrollArea from "@radix-ui/react-scroll-area"
import Checkout from "@/components/cart/Checkout"

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false)
  const count = useRef(0)
  useHotkeys("ctrl+c", () => setIsOpen((state) => !state), [setIsOpen])

  return (
    <Root open={isOpen} onOpenChange={setIsOpen}>
      <Trigger asChild className="cursor-pointer">
        <button className="relative flex items-center justify-center">
          <AccessibleIcon label="Shopping Cart">
            <ShoppingBagIcon className="h-6 w-6 text-white" />
          </AccessibleIcon>
          <span className="absolute bottom-[-2px] right-[-2px] h-3 w-3 rounded-full border-2 border-black bg-yellow-600" />
        </button>
      </Trigger>
      <Portal forceMount>
        <Transition.Root show={isOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-75"
            leave="ease-in duration-200"
            leaveFrom="opacity-75"
            leaveTo="opacity-0"
          >
            <Overlay className={`fixed inset-0 bg-black transition-all`} />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out-quint duration-[350ms]"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="ease-in duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Content className="fixed right-0 top-0 flex h-full w-full flex-col items-stretch rounded-l-2xl border-l border-neutral-800 bg-neutral-950 p-6 xs:w-96">
              <div className="mb-3 flex w-full items-center justify-between">
                <header className="flex items-center gap-[8px]">
                  <Title className="text-xl font-bold">Shopping Cart</Title>
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-yellow-500 text-sm font-bold text-black">
                    3
                  </span>
                </header>
                <AccessibleIcon label="Close">
                  <Close asChild>
                    <button>
                      <XMarkIcon className="h-6 w-6 text-white" />
                    </button>
                  </Close>
                </AccessibleIcon>
              </div>
              <Description className="mb-6 text-sm font-light opacity-80">
                Manage your cart here and proceed to checkout.
              </Description>
              <ScrollArea.Root
                scrollHideDelay={1000}
                className="relative w-full flex-grow overflow-hidden rounded-md "
              >
                <ScrollArea.Viewport className="relative h-full w-full snap-y snap-mandatory">
                  <ul className="flex flex-col gap-4">
                    {new Array(50).fill(0).map((item, index) => (
                      <li
                        key={index}
                        className="flex h-12 snap-center items-center justify-center rounded-md bg-neutral-700"
                      >
                        Item {index}
                      </li>
                    ))}
                  </ul>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar className="w-1">
                  <ScrollArea.Thumb className="rounded-full bg-neutral-500" />
                </ScrollArea.Scrollbar>
              </ScrollArea.Root>
              <Checkout subtotal={15} taxes={2.29} shipping={5} />
              <Close asChild className="flex-shrink-0">
                <button className="h-12 rounded-md border border-white/90 bg-transparent text-sm font-semibold text-white transition-all hover:border-none hover:bg-white hover:text-black">
                  Proceed to checkout
                </button>
              </Close>
            </Content>
          </Transition.Child>
        </Transition.Root>
      </Portal>
    </Root>
  )
}

export default Cart
