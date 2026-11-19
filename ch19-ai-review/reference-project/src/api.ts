import { productsResponseSchema } from './schema'
import type { Product } from './types'

const SOURCE = '/products.json'

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(SOURCE)
  const data: any = await res.json()
  const parsed = productsResponseSchema.parse(data)
  return parsed.products as Product[]
}
