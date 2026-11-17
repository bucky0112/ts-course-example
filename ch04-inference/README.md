# 第 4 章：型別其實不用你講（型別推論）

| 簡報 | 檔案 | 看什麼 | 指令 |
|---|---|---|---|
| p22 | `src/inference-demo.ts` | 標註刪掉，型別還在：`productPrice1`、`productPrice2` 懸停都是 `number`（檔案最後補充：改用 `const` 會推出什麼） | 編輯器懸停 |
| p23 | `src/infer-sources.ts` | 推得出來的三種情況：初始值、return、已有元素的陣列 | 編輯器懸停 |
| p24 | `src/empty-array.ts` | 空陣列看你先 push 什麼：`string[]` → `(string \| number)[]` | 編輯器懸停 |
| p24 | `src/empty-array-export.ts` | export 出去的空陣列變成 `never[]`，push 直接紅線（TS2345） | `npm run check` |
| p24 | `src/any-creeps-in.ts`（第 1、2 段） | 函式參數（TS7006）、跨函式賦值（TS7034 / TS7005） | `npm run check` |
| p25 | `src/any-creeps-in.ts` | 會紅線的 any（第 1、2 段）與不會紅線的 any（第 3 段 `JSON.parse`，零紅線） | `npm run check` |
| p26 | `exercise/start.ts` | 練習起點：每個地方都標滿了 | 編輯器懸停 |

## 執行

```bash
npm install
npm run check
```

預期 4 個錯誤，全部來自 `src/` 的示範檔：

- `src/any-creeps-in.ts`：TS7006、TS7034、TS7005（第 3 段零紅線）
- `src/empty-array-export.ts`：TS2345

`exercise/` 底下兩個檔案都不會有錯誤。
