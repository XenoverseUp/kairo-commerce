"use client"

import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"
import { Fragment, useState } from "react"
import { useHotkeys } from "react-hotkeys-hook"
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
import { Transition } from "@headlessui/react"
import { StopIcon, XMarkIcon } from "@heroicons/react/24/solid"

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  useHotkeys("ctrl+c", () => setIsOpen((state) => !state), [setIsOpen])

  return (
    <Root open={isOpen} onOpenChange={setIsOpen}>
      <Trigger asChild className="sm:hidden">
        <button>
          <AccessibleIcon label="Menu">
            <Bars3BottomLeftIcon className="h-6 w-6 text-white" />
          </AccessibleIcon>
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
            <Overlay
              className={`fixed inset-0 bg-black transition-all sm:hidden`}
            />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-[350ms]"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="ease-in duration-200"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Content className="fixed left-0 top-0 flex h-full w-full flex-col items-stretch border-r border-neutral-800 bg-neutral-950 p-6 xs:w-96 sm:hidden">
              <div className="mb-3 flex w-full items-center justify-between">
                <Title className="flex items-center gap-1">
                  <StopIcon className="h-6 w-6 text-white" />
                  <p className="font-bold">kairo</p>
                </Title>
                <AccessibleIcon label="Close">
                  <Close asChild>
                    <button>
                      <XMarkIcon className="h-6 w-6 text-white" />
                    </button>
                  </Close>
                </AccessibleIcon>
              </div>
              <Description>menu wtf??</Description>
              <Close asChild>
                <button>close</button>
              </Close>
            </Content>
          </Transition.Child>
        </Transition.Root>
      </Portal>
    </Root>
  )
}

export default MobileMenu
