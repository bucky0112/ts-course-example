// p39 z.infer：一行把型別從 schema 長出來，手寫的 Product interface 刪掉
// 滑鼠移到 Product：展開的物件型別，欄位跟 schema 一模一樣
// 型別位置的 typeof 是新語法：「拿這個變數的型別」（Deck I 只教過寫在 if 裡的 typeof 窄化）

import { z } from 'zod'
import { productSchema } from './product-schema'

export type Product = z.infer<typeof productSchema>
