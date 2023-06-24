"use client"

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { useRef, useState } from "react"
import { useHotkeys } from "react-hotkeys-hook"

const keyMap = {
  FOCUS_SEARCH: "command+k",
}

const SearchBar = () => {
  const search = useRef(null)
  const [value, setValue] = useState("")
  useHotkeys("ctrl+k", () => search.current.focus())

  return (
    <form
      action=""
      className="w-96 h-10 border border-gray-800 focus-within:border-gray-200 transition-colors rounded-full flex gap-2 items-center px-3"
    >
      <MagnifyingGlassIcon className="w-5 h-5 text-white" />
      <input
        ref={search}
        {...{ value }}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        name="search"
        autoComplete="off"
        placeholder="Search for products."
        className="border-none text-sm bg-transparent outline-none flex-grow"
      />
      <key className=" border-gray-400 rounded-md border-b-gray-400 border-b-[2.5px] border bg-white text-gray-900 font-mono text-[10px] px-2 py-[3px]">
        CTRL + K
      </key>
    </form>
  )
}

export default SearchBar
