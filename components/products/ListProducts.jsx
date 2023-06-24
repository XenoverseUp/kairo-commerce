import Product from "./Product"

/**
 * The ListProduct properties.
 * @typedef {import('@/backend/models/Product').IProduct} IProduct
 * @typedef {object} Props
 * @property {Array<IProduct>} data - The all product data.
 */

/**
 * ListProduct component.
 *
 * @type {React.FC<Props>}
 * @returns {React.ReactElement}.
 */

const ListProducts = ({ data }) => {
  return (
    <section>
      {data.map((productData, index) => (
        <Product key={`product-${index}`} data={productData} />
      ))}
    </section>
  )
}

export default ListProducts
