# 第 9 章：寫一次，通吃各種資料（Generics）

| 檔案 | 簡報 | 示範什麼 |
|---|---|---|
| `src/copy-three-times.ts` | p57 | 三個函式只差在型別 |
| `src/any-version.ts` | p58 | 用 any 合併，提示全部消失 |
| `src/generic.ts` | p59 | 泛型；沒加限制的版本函式內會紅線 |
| `src/constraint.ts` | p60 | `T extends { id: number }`；TS2345 與 TS2353 |
| `exercise/start.ts` | p61 | 練習起點：商品與訂單各一個查找函式 |
| `exercise/solution.ts` | p61 | 解答：一個泛型函式 |

## 執行

```bash
npm install
npm run check
```
