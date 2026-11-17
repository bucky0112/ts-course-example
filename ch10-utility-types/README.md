# 第 10 章：別人已經幫你寫好了（工具型別）

| 簡報 | 檔案 | 看什麼 | 指令 |
|---|---|---|---|
| p64 | `src/manual-update.ts` | 手寫的更新形狀跟 Product 沒有連在一起 | `npm run check` |
| p65 | `src/partial.ts` | `Partial<Product>`；在 Product 加 weight，patch 的自動完成會有它 | `npm run check` |
| p66 | `src/pick-omit.ts` | `Omit<Product, 'id'>`、`Pick<Product, 'id' \| 'name'>` | `npm run check` |
| p67 | `src/record.ts` | `Record<Product['category'], Product[]>`；少一個鍵會紅線 | `npm run check` |
| p68 | `exercise/start.ts` | 練習起點：手寫的 NewProduct 與 ProductUpdate | `npm run check` |
| p68 | `exercise/solution.ts` | 解答：`Omit` 與 `Partial<NewProduct>`，更新時不能改 id | `npm run check` |

本章練習是獨立的起點，不接上一章的 solution。

## 執行

```bash
npm install
npm run check
```

預期：1 個錯誤，是 `src/record.ts` 刻意少了 `pouch` 的 TS2741。
