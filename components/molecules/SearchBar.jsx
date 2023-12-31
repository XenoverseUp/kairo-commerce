"use client"

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { useRef, useState } from "react"
import { useHotkeys } from "react-hotkeys-hook"

const keyMap = {
  FOCUS_SEARCH: "command+k",
}

const SearchBar = ({ noShortcut }) => {
  const search = useRef(null)
  const [value, setValue] = useState("")
  useHotkeys("ctrl+k", () => search.current.focus())

  return (
    <form
      action=""
      className="max-w-96 flex h-10 w-full flex-shrink-0 items-center gap-2 rounded-full border border-gray-800 px-3 transition-colors focus-within:border-gray-200"
    >
      <MagnifyingGlassIcon className="h-5 w-5 text-white" />
      <input
        ref={search}
        {...{ value }}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        name="search"
        autoComplete="off"
        placeholder="Search for products."
        className="flex-grow border-none bg-transparent text-sm outline-none"
      />
      <kbd
        className={`${
          noShortcut ? "hidden" : ""
        } rounded-md border border-b-[2.5px] border-gray-400 border-b-gray-400 bg-white px-2 py-[3px] font-mono text-[10px] text-gray-900`}
      >
        CTRL + K
      </kbd>
    </form>
  )
}

export default SearchBar
