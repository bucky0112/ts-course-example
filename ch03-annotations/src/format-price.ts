// p18 一個函式：參數要標，回傳也要標

export function formatPrice(
  price: number
): string {
  return `NT$ ${price.toLocaleString()}`
}

// p18 把回傳型別改成 number：紅線不在 function 那一行，在 return 那一行
export function formatPriceWrong(
  price: number
): number {
  return `NT$ ${price.toLocaleString()}`
}
