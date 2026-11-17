# TypeScript 課程範例

講師與學生上課共用的程式碼：簡報上有程式碼的每一頁，都能在這裡找到對應的檔案直接打開對照，不用現場逐字打。
每一章一個獨立專案，進到資料夾後 `npm install` 就能跑；各章 README 的表格依簡報頁碼列出「簡報｜檔案｜看什麼｜指令」。

使用 TypeScript 7。注意：TypeScript 6 以後 `strict` 預設就是 `true`，要關掉必須明寫 `"strict": false`，把那行註解掉沒有用。

| 資料夾 | 章節 | 執行 |
|---|---|---|
| `ch01-js-vs-ts` | 第 1 章 半夜的錯誤（p3–4） | `npm run dev`（Vite） |
| `ch02-compile` | 第 2 章 編譯成 JS | `npm run build` → `npm start`（p9）；p11–12 strict 示範與 Lab 在 `lab/`，`npm run check:lab` |
| `ch03-annotations` | 第 3 章 幫值標上型別 | `npm run check` |
| `ch04-inference` | 第 4 章 型別其實不用你講 | `npm run check` |
| `ch05-interface-type` | 第 5 章 幫一包資料取個名字 | `npm run check` |
| `ch06-union` | 第 6 章 這個或那個 | `npm run check` |
| `ch07-extends` | 第 7 章 組起來比從頭寫好 | `npm run check` |
| `ch08-narrowing` | 第 8 章 先確認是哪一種再動手 | `npm run check` |
| `ch09-generics` | 第 9 章 寫一次，通吃各種資料 | `npm run check` |
| `ch10-utility-types` | 第 10 章 別人已經幫你寫好了 | `npm run check` |
| `ch11-props` | 第 11 章 元件到底收什麼（Vite + React） | `npm run dev`、`npm run check` |
| `ch12-state` | 第 12 章 狀態也要說清楚（Vite + React） | `npm run dev`、`npm run check` |
| `ch13-events` | 第 13 章 這個事件是哪一種（Vite + React） | `npm run dev`、`npm run check` |
| `ch14-untrusted-data` | 第 14 章 從網路來的不能直接信（Vite + React） | `npm run dev`、`npm run check` |
| `ch15-zod` | 第 15 章 在跑的時候擋下來（Vite + React + Zod 4） | `npm run dev`、`npm run check`、`node src/parse-throws.ts` |
| `ch16-infer` | 第 16 章 型別自己長出來（Vite + React + Zod 4） | `npm run dev`、`npm run check`、`node src/two-definitions.ts` |

第 3 章之後的資料夾結構都一樣：

- `src/`：每頁簡報的示範程式，會故意留下紅線
- `exercise/start.ts`：練習題的起點
- `exercise/solution.ts`：解答，最後的「試試看」註解取消後可以看到對應的錯誤

練習銜接：

- 第 3～7 章一章接一章：每章的 `start.ts` 大致等於上一章的 `solution.ts`（第 4 章調整了商品欄位，`start.ts` 開頭有說明）。
- 第 8 章起每章練習各自獨立，不接上一章的 `solution.ts`。
- 第 11～13 章（React）一章接一章：`exercise/start/` 是上一章的 `exercise/solution/`（第 11 章從 JavaScript 版起點開始）。章 11–13 的練習是資料夾（`start/`、`solution/`），不是單一檔案。
- 第 14～16 章（API 與 Zod）一章接一章：第 14 章是新的起點（資料改從 DummyJSON 來，欄位跟課程的 `Product` 不同），第 15、16 章的 `exercise/start/` 是上一章的 `exercise/solution/`。資料來源改各資料夾 `src/source.ts`（或 `exercise/*/source.ts`）的一行切換，`public/products.json` 是斷網備案。

各章 `npm run check` 會看到的錯誤都是刻意留下的示範，預期數量寫在各章 README。
