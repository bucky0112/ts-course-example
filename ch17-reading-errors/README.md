# 第 17 章：紅線到底在說什麼（讀 TS 錯誤訊息）

| 簡報 | 檔案 | 看什麼 | 指令 |
|---|---|---|---|
| p3 | `src/anatomy.ts` | 一則 TS2322 拆成四塊：位置、實際（`'string'`）、期望（`'number'`）、來源（`The expected type comes from property 'price' which is declared here on type 'Product'`）。來源那一行只在 pretty 輸出出現 | `npm run check` |
| p4 | `src/short-messages.ts` | 三則短訊息：TS2322（變數）、TS2345（函式參數）、TS2741（少一個欄位） | `npm run check` |
| p5 | `src/long-message.ts` | 長訊息：三層的 TS2430（第 7 章覆寫 `id`）、四層的 TS2345（陣列裡一筆 `category` 打錯）。從第一行往下讀，看到 `property 'X'` 就停 | `npm run check` |
| p6 | `src/position-vs-cause.ts` | 位置不等於原因：回傳型別寫錯，紅線在 `return`；參數型別寫錯，紅線在呼叫的地方。兩個都要改宣告那一行 | `npm run check` |
| p7 | `exercise/start.ts` | 練習起點：五則錯誤訊息，只讀不修 | `npm run check` |

## 執行

```bash
npm install
npm run check              # = tsc，錯誤訊息有顏色、有來源行
npx tsc --pretty false     # 一行一則，沒有來源行（接管線、貼到搜尋引擎時就是這個樣子）
npx tsc --locale zh-tw     # 中文訊息；查資料時還是用錯誤碼加英文訊息
```

預期：`npm run check` **13 個錯誤**，全部是刻意留下的：

- `src/` 8 個：`anatomy.ts` 1（TS2322）、`short-messages.ts` 3（TS2322、TS2345、TS2741）、`long-message.ts` 2（TS2430、TS2345）、`position-vs-cause.ts` 2（TS2322、TS2345）
- `exercise/start.ts` 5 個：練習要讀的就是這五則，收工時數量不變

第 12 章的 `never[]`、第 3 章的回傳型別、第 7 章的 TS2430，本章都會再看到一次。
