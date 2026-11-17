# 第 7 章：組起來比從頭寫好（extends / 交集型別）

| 簡報 | 檔案 | 看什麼 | 指令 |
|---|---|---|---|
| p43–44 | `src/extends.ts` | `AdminProduct extends Product`；在 Product 加 `weight: number`，`product` 和 `adminProduct` 同時紅線（TS2741） | `npm run check` |
| p45 | `src/intersection.ts` | `Product & AdminFields` | `npm run check` |
| p46 | `src/dont-compose.ts` | 欄位長得像不代表該組 | `npm run check` |
| p47 | `exercise/start.ts` | 練習起點：AdminProduct 把欄位全部抄一次（接續第 6 章的解答） | `npm run check` |
| p47 | `exercise/solution.ts` | 解答：extends；Product 加欄位兩邊都紅線；最後有覆寫 id 的對照註解 | `npm run check` |

## 執行

```bash
npm install
npm run check
```

預期：0 個錯誤。解答最後取消 `AdminProductB` 的註解就能看到 TS2430。
