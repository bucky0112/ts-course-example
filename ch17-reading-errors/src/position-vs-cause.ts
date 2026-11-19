// p48 位置不等於原因：TS 把你寫的宣告當真
// 紅線畫在「跟宣告對不上」的地方；如果錯的是宣告本身，該改的是另一行

// 1. 回傳型別寫錯（第 3 章 p18）：紅線在 return，該改的是 function 那一行的 : number
function formatPrice(price: number): number {
  return `NT$ ${price.toLocaleString()}`
}

// 2. 參數型別寫錯：紅線在呼叫的地方，該改的是 discountPrice 那一行的 price: string
function discountPrice(price: string) {
  return Number(price) * 0.9
}

const sale = discountPrice(1280)
