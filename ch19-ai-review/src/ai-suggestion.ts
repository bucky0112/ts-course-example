// p19 一段 AI 給的建議（原樣保留）

import { z } from 'zod'

/**
 * Product schema used to validate the API response.
 */
export const productSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  rating: z.number(),
})

/**
 * Product entity.
 */
export interface Product {
  id: number
  title: string
  price: number
  rating: number
  brand: string
  discountPercentage: number
}

const productsResponseSchema = z.object({
  products: z.array(productSchema),
})

/**
 * Fetches products and validates the response with Zod.
 */
export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch('https://dummyjson.com/products?limit=30')
  const json: unknown = await res.json()
  const parsed = productsResponseSchema.parse(json)
  return parsed.products as Product[]
}
