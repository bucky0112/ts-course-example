import { SOURCE } from './source'

// 不再宣稱回傳 ProductsResponse：資料長怎樣要等 safeParse 驗過才知道，所以回傳 unknown
export async function fetchProducts(): Promise<unknown> {
  const res = await fetch(SOURCE)
  return res.json()
}
