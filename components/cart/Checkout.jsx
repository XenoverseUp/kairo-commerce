import { HorizontalSeparator } from "../molecules/Separator"

/**
 * The Checkout properties.
 * @typedef {object} Props
 * @property {number} subtotal - The subtotal.
 * @property {number} taxes - The declared taxes.
 * @property {number} shipping - The shipping fare.
 */

/**
 * Checkout component.
 *
 * @type {React.FC<Props>}
 * @returns {React.ReactElement}.
 */

const Checkout = ({ subtotal, taxes, shipping }) => (
  <section className="mb-6 mt-8 h-auto w-full flex-shrink-0 space-y-2">
    <HorizontalSeparator decorative />
    <div className="flex items-center justify-between">
      <span className="text-sm font-light">Subtotal</span>
      <span className="font-mono text-sm">${subtotal.toFixed(2)} USD</span>
    </div>
    <div className="flex items-center justify-between">
      <span className="text-sm font-light">Taxes</span>
      <span className="font-mono text-sm">${taxes.toFixed(2)} USD</span>
    </div>
    <div className="flex items-center justify-between">
      <span className="text-sm font-light">Shipping</span>
      <span className="font-mono text-sm">${shipping.toFixed(2)} USD</span>
    </div>
    <HorizontalSeparator />
    <div className="flex items-center justify-between">
      <span className="font-bold">Total</span>
      <span className="font-mono text-sm font-bold">
        ${(subtotal + shipping + taxes).toFixed(2)}
      </span>
    </div>
  </section>
)

export default Checkout
