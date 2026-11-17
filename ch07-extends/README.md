# 第 7 章：組起來比從頭寫好（extends / 交集型別）

| 檔案 | 簡報 | 示範什麼 |
|---|---|---|
| `src/extends.ts` | p42–43 | `AdminProduct extends Product`；改 Product 兩邊同時生效 |
| `src/intersection.ts` | p44 | `Product & AdminFields` |
| `src/dont-compose.ts` | p45 | 欄位長得像不代表該組 |
| `exercise/start.ts` | p46 | 練習起點：AdminProduct 把欄位全部抄一次 |
| `exercise/solution.ts` | p46 | 解答：extends；最後有覆寫 id 的對照註解 |

## 執行

```bash
npm install
npm run check
```

全部檔案都沒有錯誤。解答最後取消 `AdminProductB` 的註解就能看到 TS2430。
