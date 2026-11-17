# 第 9 章：寫一次，通吃各種資料（Generics）

| 簡報 | 檔案 | 看什麼 | 指令 |
|---|---|---|---|
| p57 | `src/copy-three-times.ts` | 三個函式只差在型別 | `npm run check` |
| p58 | `src/any-version.ts` | 用 any 合併，提示全部消失 | `npm run check` |
| p59 | `src/generic.ts` | 泛型；沒加限制的版本函式內會紅線（TS2339） | `npm run check` |
| p60 | `src/constraint.ts` | `T extends { id: number }`；TS2345 與 TS2353 | `npm run check` |
| p61 | `exercise/start.ts` | 練習起點：商品與訂單各一個查找函式 | `npm run check` |
| p61 | `exercise/solution.ts` | 解答：一個泛型函式 | `npm run check` |

本章練習是獨立的起點，不接上一章的 solution。

## 執行

```bash
npm install
npm run check
```

預期：3 個錯誤，都是刻意留下的：`src/generic.ts` 的 TS2339、`src/constraint.ts` 的 TS2345 與 TS2353。
