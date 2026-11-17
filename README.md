# TypeScript 課程範例

每一章一個獨立專案，進到資料夾後 `npm install` 就能跑。

| 資料夾 | 章節 | 執行 |
|---|---|---|
| `ch01-js-vs-ts` | 第 1 章 半夜的錯誤 | `npm run dev`（Vite） |
| `ch02-compile` | 第 2 章 編譯成 JS | `npm run build` → `npm start`；p11 strict 示範 `npm run check:lab` |
| `ch03-annotations` | 第 3 章 幫值標上型別 | `npm run check` |
| `ch04-inference` | 第 4 章 型別其實不用你講 | `npm run check` |
| `ch05-interface-type` | 第 5 章 幫一包資料取個名字 | `npm run check` |
| `ch06-union` | 第 6 章 這個或那個 | `npm run check` |
| `ch07-extends` | 第 7 章 組起來比從頭寫好 | `npm run check` |
| `ch08-narrowing` | 第 8 章 先確認是哪一種再動手 | `npm run check` |
| `ch09-generics` | 第 9 章 寫一次，通吃各種資料 | `npm run check` |
| `ch10-utility-types` | 第 10 章 別人已經幫你寫好了 | `npm run check` |

第 4 章之後的資料夾結構都一樣：

- `src/`：每頁簡報的示範程式，會故意留下紅線
- `exercise/start.ts`：練習題的起點
- `exercise/solution.ts`：解答，最後的「試試看」註解取消後可以看到對應的錯誤

練習是一章接一章的：每章的 `start.ts` 大致等於上一章的 `solution.ts`。
