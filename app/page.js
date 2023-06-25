import ListProducts from "@/components/products/ListProducts"

const getProducts = async () => {
  const res = await fetch(`${process.env.API_URL}/api/products/`, {
    method: "GET",
  })

  return await res.json()
}

export default async function Home() {
  const productsData = await getProducts()

  return //<ListProducts data={productsData} />
}
