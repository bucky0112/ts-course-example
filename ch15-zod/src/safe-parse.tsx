// p34 safeParse 與錯誤處理：不丟錯，回傳成功或失敗——就是章 8 學過的可辨識聯集（靠 success 分辨）
// - SkipCheck 沒先檢查 success 就拿 result.data → TS18048（下面刻意留著）
//   跟章 8 p53 的 TS2339 錯誤碼不同，道理一樣：不讓你在還不知道結果的時候就去拿結果
// - ProductCount 先檢查 success；失敗分支用 z.prettifyError 產生錯誤文字

import { z } from 'zod'
import { productsResponseSchema } from './product-schema'

export function SkipCheck({ raw }: { raw: unknown }) {
  const result = productsResponseSchema.safeParse(raw)
  return <p>共 {result.data.products.length} 件</p>
}

export function ProductCount({ raw }: { raw: unknown }) {
  const result = productsResponseSchema.safeParse(raw)
  if (!result.success) {
    return <pre>{z.prettifyError(result.error)}</pre>
  }
  return <p>共 {result.data.products.length} 件</p>
}
