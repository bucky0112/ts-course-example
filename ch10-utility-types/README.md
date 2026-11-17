# 第 10 章：別人已經幫你寫好了（工具型別）

| 檔案 | 簡報 | 示範什麼 |
|---|---|---|
| `src/manual-update.ts` | p63 | 手寫的更新形狀跟 Product 沒有連在一起 |
| `src/partial.ts` | p64 | `Partial<Product>` |
| `src/pick-omit.ts` | p65 | `Omit<Product, 'id'>`、`Pick<Product, 'id' \| 'name'>` |
| `src/record.ts` | p66 | `Record<Product['category'], Product[]>`；少一個鍵會紅線 |
| `exercise/start.ts` | p67 | 練習起點：手寫的 NewProduct 與 ProductUpdate |
| `exercise/solution.ts` | p67 | 解答：Omit 與 Partial |

## 執行

```bash
npm install
npm run check
```
