import { z } from 'zod'

export const productSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  category: z.string(),
  thumbnail: z.string(),
  rating: z.number(),
})

export const productsResponseSchema = z.object({
  products: z.array(productSchema),
  total: z.number(),
})
