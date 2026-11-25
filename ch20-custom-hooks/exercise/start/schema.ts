// 章 16 練習完成的樣子：schema 一份，型別從它推導
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

export type Product = z.infer<typeof productSchema>
