# 第 6 章：這個或那個（Union / Literal Types）

| 簡報 | 檔案 | 看什麼 | 指令 |
|---|---|---|---|
| p36 | `src/category-string.ts` | `category: string` 太鬆，`'backpak'` 拼錯沒紅線 | `npm run check` |
| p37 | `src/category-union.ts` | 字面量 union：同樣的錯字出現 TS2820（拼字建議，不是列出四個值） | `npm run check` |
| p38 | `src/category-union.ts` | 刪掉 `'backpak'`，在引號裡按 Ctrl+Space，四個選項自己跳出來 | 編輯器自動完成 |
| p39 | `src/stock.ts` | union 不能直接用：`stock.toFixed` 出現 TS2339，第二行點名 `"unknown"` | `npm run check` |
| p40 | `exercise/start.ts` | 練習起點（接續第 5 章的解答） | — |
| p40 | `exercise/solution.ts` | 解答：`Category`、`Stock`；第 4 題 `product.stock - 1` 刻意留著紅線（TS2362），不要求修好 | `npm run check` |

## 執行

```bash
npm install
npm run check
```

預期 3 個錯誤，都是刻意留下的：

- `src/category-union.ts`：TS2820
- `src/stock.ts`：TS2339
- `exercise/solution.ts`：TS2362
