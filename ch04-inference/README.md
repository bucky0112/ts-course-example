# 第 4 章：型別其實不用你講（型別推論）

| 檔案 | 簡報 | 示範什麼 |
|---|---|---|
| `src/inference-demo.ts` | p22 | 標註刪掉，型別還在；`const` 會推成 `1280` 而不是 `number` |
| `src/infer-sources.ts` | p23 | 推得出來的三種情況 |
| `src/empty-array.ts` | p24 | 空陣列看你先 push 什麼 |
| `src/empty-array-export.ts` | p24 | export 出去的空陣列變成 `never[]` |
| `src/any-creeps-in.ts` | p25 | 會紅線的 any（TS7006、TS7034/TS7005）與不會紅線的 any（`JSON.parse`） |
| `exercise/start.ts` | p26 | 練習起點：每個地方都標滿了 |
| `exercise/solution.ts` | p26 | 解答：只留三個非標不可的 |

## 執行

```bash
npm install
npm run check
```

`exercise/` 底下兩個檔案都不會有錯誤，錯誤都來自 `src/` 的示範檔。
