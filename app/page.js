import ListProducts from "@/components/products/ListProducts"

const getProducts = async () => {
  const res = await fetch(`${process.env.API_URL}/api/products`)
  const data = await res.json()

  return data
}

export default async function Home() {
  const productsData = await getProducts()

  return <ListProducts data={productsData} />
}
