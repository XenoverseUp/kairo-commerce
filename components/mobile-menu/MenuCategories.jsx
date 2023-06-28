import Link from "next/link"
import { Fragment } from "react"

const getCategories = async () =>
  await (
    await fetch(`${process.env.API_URL}/api/category`, { method: "GET" })
  ).json()

const MenuCategories = async () => {
  const categories = await getCategories()

  return (
    <Fragment>
      {categories.map((category) => (
        <Link href={`/${category}`} className="cursor-pointer capitalize">
          {category}
        </Link>
      ))}
      {categories.map((category) => (
        <Link href={`/${category}`} className="cursor-pointer capitalize">
          {category}
        </Link>
      ))}
    </Fragment>
  )
}

export default MenuCategories
