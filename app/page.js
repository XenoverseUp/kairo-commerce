import { redirect } from "next/navigation"

const getProducts = async () => {
  const res = await fetch(`${process.env.API_URL}/api/products/`, {
    method: "GET",
  })

  return await res.json()
}

export default async function Home() {
  redirect("/all")
}
