// p31 Zod 是什麼：interface 只在寫程式的時候存在，schema 在執行的時候真的去檢查
// 兩者並排：長得很像，但編譯成 JavaScript 之後，interface 消失、schema 留下來

import { z } from 'zod'

interface Price {
  amount: number
}

const priceSchema = z.object({
  amount: z.number(),
})

export const checked = priceSchema.safeParse({ amount: '9.99' }) // 執行時會失敗：amount 是字串
export type { Price }
