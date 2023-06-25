/**
 * The ListProduct properties.
 * @typedef {import('@/backend/models/Product').IProduct} IProduct
 * @typedef {object} Props
 * @property {IProduct} data - The all product data.
 */

/**
 * ListProduct component.
 *
 * @type {React.FC<Props>}
 * @returns {React.ReactElement}.
 */

const Product = ({ data }) => {
  return <h1>A: {data.name}</h1>
}

export default Product
