// p52 三種讓紅線消失的方法：any、as、@ts-ignore
// 三種都會讓紅線立刻不見，但資料一樣是壞的（p53 實際跑一次）

import { responseText, type Product } from './product.ts'

function renderPrices(list: Product[]) {
  return list.map((product) => `${product.name}：NT$ ${product.price.toLocaleString()}`)
}

// JSON.parse 回傳 any；先接成 unknown，才看得到 TS 的檢查
const data: unknown = JSON.parse(responseText)

// 基準：紅線（TS2345）。這條紅線說的是實話——TS 不知道 data 長什麼樣子
renderPrices(data)

// 1. any：把檢查整個關掉
const viaAny: any = data
renderPrices(viaAny)

// 2. as：告訴 TS「相信我，它就是 Product[]」
renderPrices(data as Product[])

// 3. @ts-ignore：叫 TS 不要看下一行
// @ts-ignore
renderPrices(data)
