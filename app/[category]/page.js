export const dynamicParams = false

export async function generateStaticParams() {
  /** @type {string[]} */
  const categories = await (
    await fetch(`${process.env.API_URL}/api/category`, {
      method: "GET",
    })
  ).json()

  return categories.map(category => ({ category }))
}

export default function Products({ params }) {
  const { category } = params

  return <main className="w-full px-6 py-8">{category}</main>
}
