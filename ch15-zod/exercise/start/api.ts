import { SOURCE } from './source'
import type { ProductsResponse } from './types'

// 標上回傳型別：呼叫端有自動完成、打錯會紅——但這只是「宣稱」，資料長怎樣 TS 看不到
export async function fetchProducts(): Promise<ProductsResponse> {
  const res = await fetch(SOURCE)
  return res.json()
}
