"use client"

import * as ScrollArea from "@radix-ui/react-scroll-area"

const MenuContentWrapper = ({ children }) => (
  <ScrollArea.Root className="mt-4 flex-grow overflow-hidden">
    <ScrollArea.Viewport asChild className="relative h-full w-full" >
      <section className="flex flex-col gap-4">
        {children}
        </section>
    </ScrollArea.Viewport>
    <ScrollArea.Scrollbar className="w-1">
      <ScrollArea.Thumb className="rounded-full bg-neutral-500" />
    </ScrollArea.Scrollbar>
  </ScrollArea.Root>
)

export default MenuContentWrapper
