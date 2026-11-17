// 商品 schema：跟 types.ts 的 Product 逐欄對應
// brand 沒有列進來：快照裡一半的商品沒有 brand，寫成必填會把好資料也擋掉
// 沒列的欄位不會報錯，z.object 會直接把它剝掉

import { z } from 'zod'

export const productSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  category: z.string(),
  thumbnail: z.string(),
  rating: z.number(),
  discountPercentage: z.number(),
  availabilityStatus: z.enum(['In Stock', 'Low Stock', 'Out of Stock']), // 章 6 學過的字面量 union
})

export const productsResponseSchema = z.object({
  products: z.array(productSchema),
  total: z.number(),
  skip: z.number(),
  limit: z.number(),
})
