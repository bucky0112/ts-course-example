export function salePrice(product) {
  return Math.round(product.price * product.discount.rate)
}
