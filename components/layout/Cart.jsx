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
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"
import { Transition } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/solid"
import { useHotkeys } from "react-hotkeys-hook"

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false)
  const count = useRef(0)
  useHotkeys("ctrl+c", () => setIsOpen((state) => !state), [setIsOpen])

  return (
    <Root open={isOpen} onOpenChange={setIsOpen}>
      <Trigger asChild className="cursor-pointer">
        <div className="relative flex items-center justify-center">
          <AccessibleIcon label="Shopping Cart">
            <ShoppingBagIcon className="h-6 w-6 text-white" />
          </AccessibleIcon>
          <span className="w-3 h-3 bg-yellow-600 absolute bottom-[-2px] right-[-2px] rounded-full border-2 border-black" />
        </div>
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
            enter="ease-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="ease-in duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Content className="fixed top-0 right-0 w-96 h-full bg-neutral-950 border-l border-neutral-800 p-6 flex flex-col items-stretch">
              <div className="flex w-full justify-between items-center mb-3">
                <Title className="font-bold text-xl">Shopping Cart</Title>
                <AccessibleIcon label="Close">
                  <Close asChild>
                    <button>
                      <XMarkIcon className="text-white w-6 h-6" />
                    </button>
                  </Close>
                </AccessibleIcon>
              </div>
              <Description className="text-sm opacity-80 font-light">
                Manage your cart here and proceed to checkout.
              </Description>
              <section className="flex-grow flex items-center justify-center">
                wwf
              </section>
              <Close asChild>
                <button className="bg-white text-black h-12 rounded-md text-sm font-semibold">
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
