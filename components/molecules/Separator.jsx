import { Root } from "@radix-ui/react-separator"

export const HorizontalSeparator = ({ className, decorative = false }) => (
  <Root
    orientation="horizontal"
    {...{ decorative }}
    className={`${className} w-full bg-white h-[1px]`}
  />
)

export const VerticalSeparator = ({ className, decorative = false }) => (
  <Root
    orientation="vertical"
    {...{ decorative }}
    className={`${className} h-full bg-white w-[1px]`}
  />
)
