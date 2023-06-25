import Product from "@/backend/models/Product"
import dbConnect from "@/backend/config/db.connect"

dbConnect()

/**
 * Gets all products from the DB.
 * @param {Request} request
 */
export async function GET(request) {
  const products = await Product.find()

  return new Response(JSON.stringify(products), {
    status: 200,
  })
}

/**
 *  Creates a single or multiple products out of the request body.
 * @param {Request} request
 */
export async function POST(request) {
  const product = await Product.create(await request.json())

  return new Response(JSON.stringify(product), {
    status: 200,
  })
}
