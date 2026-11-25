// 2. 把章 16 App.tsx 裡的 fetch + safeParse + LoadState 整段搬出來
// 內容一行都沒改，只是換了位置：元件不用再知道資料從哪來、怎麼驗證

import { useEffect, useState } from 'react'
import { z } from 'zod'
import { type Product, productsResponseSchema } from './product-schema'
import { SOURCE } from './source'

// 章 8 的可辨識聯集：用 status 分辨現在是哪一種狀態
export type LoadState =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'success'; products: Product[] }

// 回傳型別寫出來：用這個 hook 的人看函式簽名就知道會拿到什麼
export function useProducts(): LoadState {
  const [state, setState] = useState<LoadState>({ status: 'loading' })

  useEffect(() => {
    fetch(SOURCE)
      .then((res) => res.json())
      .then((raw: unknown) => {
        const result = productsResponseSchema.safeParse(raw)
        if (!result.success) {
          setState({ status: 'error', message: z.prettifyError(result.error) })
          return
        }
        setState({ status: 'success', products: result.data.products })
      })
      .catch((error: unknown) => setState({ status: 'error', message: String(error) }))
  }, [])

  return state
}
