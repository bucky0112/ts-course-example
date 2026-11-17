# 第 15 章：在跑的時候擋下來（Zod schema / safeParse）

| 簡報 | 檔案 | 看什麼 | 指令 |
|---|---|---|---|
| p31 | `src/interface-vs-schema.ts` | interface 只在寫程式時存在，schema 在執行時真的檢查；兩者並排 | 打開對照 |
| p32 | `src/product-schema.ts` | 商品 schema（Zod 4），跟 `src/types.ts` 照 API 寫的 `Product` 逐欄對應；**不列 `brand`**（見下方） | 打開對照 |
| p33 | `src/parse-throws.ts` | 同一份壞資料餵給 `parse`：丟出 `ZodError`，path 指到 `products[1].price`，`Invalid input: expected number, received undefined` | `node src/parse-throws.ts` |
| p34 | `src/safe-parse.tsx`、`src/App.tsx` | 沒先檢查 `success` 就拿 `result.data` → TS18048；失敗分支用 `z.prettifyError`。把 `src/source.ts` 換成壞資料，畫面顯示 `✖ Invalid input: expected number, received undefined → at products[1].price`，不再當機 | `npm run check`、`npm run dev` |
| p35 | `exercise/start/`（＝章 14 練習完成的樣子） | 練習起點：加上 schema 與 `safeParse`，失敗分支顯示錯誤；`types.ts` 的 interface 先保留，章 16 處理 | `npm run check` |

## schema 為什麼不列 brand

快照 30 筆裡 id 16–30 共 15 筆沒有 `brand`（DummyJSON 全部 194 筆有 92 筆沒有）。把 `brand` 寫成必填，正常資料會失敗 15 處——這就是「schema 寫太嚴，好資料也被擋」。沒列的欄位不會報錯，`z.object` 會直接把它剝掉。章 16 才把 `brand` 以 `.optional()` 加回來。

`availabilityStatus` 用 `z.enum(['In Stock', 'Low Stock', 'Out of Stock'])`，就是章 6 學過的字面量 union（快照裡只出現前兩種）。

## 執行

```bash
npm install                  # zod 已列在依賴裡，課前裝好（要連網）
npm run dev                  # 看畫面
npm run check                # = tsc，只檢查不輸出
node src/parse-throws.ts     # p33：Node 24 可以直接跑 .ts
```

預期：`npm run check` **1 個錯誤**，是 `src/safe-parse.tsx` 刻意留下的 TS18048。`exercise/` 底下 0 個。

資料來源切換同章 14：改 `src/source.ts`（練習是 `exercise/*/source.ts`）的一行。練習接續章 14：`exercise/start/` 就是章 14 練習完成的樣子。
