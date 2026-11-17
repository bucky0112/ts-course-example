// 章 15 的商品 schema（不列 brand）
import { z } from 'zod'

export const productSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  category: z.string(),
  thumbnail: z.string(),
  rating: z.number(),
  discountPercentage: z.number(),
  availabilityStatus: z.enum(['In Stock', 'Low Stock', 'Out of Stock']),
})

export const productsResponseSchema = z.object({
  products: z.array(productSchema),
  total: z.number(),
  skip: z.number(),
  limit: z.number(),
})
