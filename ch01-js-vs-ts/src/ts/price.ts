export function salePrice(product: { price: number; discount?: { rate: number } }) {
  return Math.round(product.price * product.discount.rate)
}
