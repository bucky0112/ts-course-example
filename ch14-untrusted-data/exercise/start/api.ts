import { SOURCE } from './source'

// 回傳值沒有型別：res.json() 是 any（第 2 題要補上 ProductsResponse）
export async function fetchProducts() {
  const res = await fetch(SOURCE)
  return res.json()
}
