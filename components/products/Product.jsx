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
  return data.name
}

export default Product
