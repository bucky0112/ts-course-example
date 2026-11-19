# 第 18 章：不要用 any 蓋掉（修正 vs 掩蓋）

| 簡報 | 檔案 | 看什麼 | 指令 |
|---|---|---|---|
| p10 | `src/three-ways.ts` | 基準紅線從 `unknown` 開始：TS2345 `Argument of type 'unknown' is not assignable to parameter of type 'Product[]'.`；再用 `any`、`as`、`@ts-ignore` 各掩蓋一次，紅線都不見了 | `npm run check` |
| p11 | `src/silenced-still-crashes.ts` | 三種掩蓋版本餵同一份壞資料（第 2 筆少了 `price`），全部當機：`Cannot read properties of undefined (reading 'toLocaleString')` | `node src/silenced-still-crashes.ts` |
| p12 | `src/as-judgement.ts` | 差太多的轉換 TS2352；`as unknown as` 不會紅（最危險）；說得出理由的 `as HTMLInputElement \| null`；多餘的 `@ts-expect-error` 會報 TS2578 | `npm run check` |
| p13 | `src/as-to-narrowing.ts` | 同一個函式的兩個版本：`as number` 掩蓋，改成 `typeof` 窄化（第 8 章） | 打開對照 |
| p14 | `exercise/start.ts` | 練習起點：三種掩蓋手法都用上了，`npm run check` 0 個錯誤，但程式不對 | `npm run check` |

商品資料在 `src/product.ts`：`responseText` 是一段假裝從 API 拿到的文字，跟第 14 章一樣第 2 筆少了 `price`。

## 執行

```bash
npm install                            # zod 已列在依賴裡（練習會用到）
npm run check                          # = tsc，只檢查不輸出
node src/silenced-still-crashes.ts     # p11：Node 24 可以直接跑 .ts
```

預期：`npm run check` **3 個錯誤**，都是刻意留下的：

- `src/three-ways.ts`：TS2345（基準紅線）
- `src/as-judgement.ts`：TS2352、TS2578

`exercise/start.ts` 一開始是 0 個錯誤；拿掉掩蓋手法後紅線會回來，全部改成真正的修正後回到 0 個。
