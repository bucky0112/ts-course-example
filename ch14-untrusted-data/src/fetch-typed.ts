// p25 把 interface 貼上去：標上照 API 寫的 ProductsResponse
// 有自動完成了，打錯字會紅——看起來很安全
// 下面 data.prodcts 刻意留著 → TS2551（Did you mean 'products'?）

import { SOURCE } from './source'
import type { ProductsResponse } from './types'

export async function loadTyped() {
  const res = await fetch(SOURCE)
  const data: ProductsResponse = await res.json()
  console.log(data.prodcts[0].title)
}
