// p40 schema 當單一真相：在 schema 加上 brand: z.string().optional()
// 型別從 schema 推導，用到 brand 的地方立刻出 TS18048——schema、型別、驗證三者同時生效
// （快照裡一半的商品沒有 brand，章 15 才沒有把它列進 schema）

import { z } from 'zod'
import { productSchema } from './product-schema'

const productWithBrandSchema = productSchema.extend({
  brand: z.string().optional(),
})

type Product = z.infer<typeof productWithBrandSchema>

export function BrandTag({ product }: { product: Product }) {
  return <span className="brand">{product.brand.toUpperCase()}</span>
}
