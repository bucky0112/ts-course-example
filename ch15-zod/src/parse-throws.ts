// p33 parse 會丟錯：拿章 14 那份壞資料餵進去，這次不是當機，是一則說得清楚的錯誤
// 直接用 Node 執行（Node 24 可以直接跑 .ts）：
//   node src/parse-throws.ts
// 會丟出 ZodError，path 指到 products[1].price：Invalid input: expected number, received undefined

import broken from '../public/products.broken.json' with { type: 'json' }
import { productsResponseSchema } from './product-schema.ts'

productsResponseSchema.parse(broken)
console.log('驗證通過')
