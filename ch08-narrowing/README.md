# 第 8 章：先確認是哪一種再動手（Narrowing）

| 簡報 | 檔案 | 看什麼 | 指令 |
|---|---|---|---|
| p50 | `src/stock.ts` | 第 6 章的紅線原封不動搬回來（TS2339） | `npm run check` |
| p51 | `src/stock-typeof.ts` | 用 `typeof` 窄化，滑鼠移到 if 裡外看型別 | `npm run check` |
| p51 | `src/truthy-trap.ts` | `if (discountPrice)` 會把 0 排除 | `node --experimental-strip-types src/truthy-trap.ts` |
| p52 | `src/in.ts` | 用 `in` 分辨物件形狀 | `npm run check` |
| p53 | `src/discriminated.ts` | 可辨識聯集：三種狀態靠 `status` 分辨；loading 分支拿結果會紅線 | `npm run check` |
| p54 | `exercise/start.ts` | 練習起點：只有 loading 一種狀態 | `npm run check` |

本章練習是獨立的起點，不接上一章的練習。

## 執行

```bash
npm install
npm run check
```

預期：1 個錯誤，是 `src/stock.ts` 刻意留下的 TS2339。
