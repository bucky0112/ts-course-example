// p51 陷阱：if (discountPrice) 會把 0 一起排除

function salePriceLoose(price: number, discountPrice?: number) {
  if (discountPrice) {
    return discountPrice
  }
  return price
}

function salePriceStrict(price: number, discountPrice?: number) {
  if (discountPrice !== undefined) {
    return discountPrice
  }
  return price
}

console.log(salePriceLoose(1280, 0)) // 1280 ← 0 元的贈品被當成「沒有折扣」
console.log(salePriceStrict(1280, 0)) // 0
