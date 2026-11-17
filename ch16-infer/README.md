# 第 16 章：型別自己長出來（z.infer / 單一真相）

| 簡報 | 檔案 | 看什麼 | 指令 |
|---|---|---|---|
| p38 | `src/two-definitions.ts` | 手寫 interface 有 `discountPercentage?`，schema 沒列：驗證後欄位被剝掉，印出「折扣：undefined」（快照第 1 筆其實是 10.48），**0 條紅線** | `node src/two-definitions.ts` |
| p39 | `src/infer.ts` | `type Product = z.infer<typeof productSchema>`；滑鼠移到 `Product` 看展開的型別；型別位置的 `typeof` 是新語法 | 編輯器懸停 |
| p40 | `src/single-source.tsx` | 在 schema 加上 `brand: z.string().optional()`，用到 `brand` 的地方立刻出 TS18048 | `npm run check` |
| p42 | `exercise/start/`（＝章 15 解答）→ `exercise/solution/` | 刪掉 `types.ts` 的手寫 interface，`Product` 改從 schema 推導 | `npm run check` |

`brand` 在章 15 的 schema 裡沒有列（快照一半的商品沒有 `brand`，寫成必填會擋掉好資料），本章才用 `.optional()` 把它加回來。

## 執行

```bash
npm install
npm run dev                     # 看畫面
npm run check                   # = tsc，只檢查不輸出
node src/two-definitions.ts     # p38
```

預期：`npm run check` **1 個錯誤**，是 `src/single-source.tsx` 刻意留下的 TS18048。`exercise/` 底下 0 個；解答最上面的「試試看」照做會出現 TS18048。

資料來源切換同章 14：改 `src/source.ts` 的一行。練習接續章 15：`exercise/start/` 就是章 15 的解答。
