// p38 兩份定義的代價：手寫的 interface 有 discountPercentage?，schema 卻沒列
// z.object 會把沒列的欄位剝掉，所以驗證完之後這個欄位永遠是 undefined——而且 0 條紅線
// 直接用 Node 執行看結果（快照第 1 筆的 discountPercentage 其實是 10.48）：
//   node src/two-definitions.ts

import { z } from 'zod'
import data from '../public/products.json' with { type: 'json' }

interface Product {
  id: number
  title: string
  price: number
  discountPercentage?: number
}

const productSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
})

const products: Product[] = z.array(productSchema).parse(data.products)
console.log(products[0].title, '折扣：', products[0].discountPercentage)
