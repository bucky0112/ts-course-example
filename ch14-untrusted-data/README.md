# 第 14 章：從網路來的不能直接信（any 的代價 / 型別謊言）

| 簡報 | 檔案 | 看什麼 | 指令 |
|---|---|---|---|
| p24 | `src/fetch-untyped.ts` | `res.json()` 是 `any`：`data.prodcts[0].nmae` 兩個打錯都 0 條紅線 | 編輯器懸停、`npm run check` |
| p25 | `src/fetch-typed.ts`、`src/types.ts` | 標上照 API 寫的 `ProductsResponse`：有自動完成、打錯會紅（TS2551 `Did you mean 'products'?`）——看起來很安全 | `npm run check` |
| p26 | `src/App.tsx`、`public/products.broken.json` | 把 `src/source.ts` 換成 `'/products.broken.json'`：`npm run check` 照樣只有 p25 那 1 條，畫面卻白掉，`TypeError: Cannot read properties of undefined (reading 'toLocaleString')` 爆在 `ProductCard` | `npm run dev` |
| p28 | `exercise/start/` → `exercise/solution/` | 從寫死的清單改成 API；標上 `ProductsResponse`；App 把 `title`、`thumbnail` 轉成 `ProductCard` 的 props；解答用 loading／error／success 三態 | `npm run check` |

## 資料從哪裡來

改 `src/source.ts`（練習則是 `exercise/*/source.ts`）的一行切換：

| 值 | 用途 |
|---|---|
| `'https://dummyjson.com/products?limit=30'` | 真的 API，要連網 |
| `'/products.json'`（預設） | DummyJSON 回應的快照：2026-11-17 抓的前 30 筆（只留 title、price、category、thumbnail、brand、rating、discountPercentage、availabilityStatus）。**斷網備案** |
| `'/products.broken.json'` | 同一份快照，第 2 筆刻意刪掉 `price`（p26 翻車用） |

欄位照 DummyJSON 寫（`title`、`thumbnail`、美元小數價格，外層包 `{ products, total, skip, limit }`），不是章 5 的 `Product`；`ProductCard` 的 props 不動，由 App 轉換，價格用 `$` 顯示。快照裡 id 16–30 共 15 筆沒有 `brand`（章 15 會用到）。商品圖是 DummyJSON 的遠端網址，斷網時只會看到 alt 文字。

## 執行

```bash
npm install
npm run dev      # 看畫面（p26 翻車要先改 src/source.ts）
npm run check    # = tsc，只檢查不輸出
```

預期：`npm run check` **1 個錯誤**，是 `src/fetch-typed.ts` 刻意留下的 TS2551。不論 `src/source.ts` 指向哪一份資料，結果都一樣——這正是本章的重點。`exercise/` 底下 0 個。

本章練習是新的起點：資料改從 API 來，不接章 13 的 solution（章 13 的商品是寫死的課程資料，欄位跟 API 不同）。
