# 第 8 章：先確認是哪一種再動手（Narrowing）

| 檔案 | 簡報 | 示範什麼 |
|---|---|---|
| `src/stock-typeof.ts` | p49–50 | 第 6 章的紅線（TS2339），用 `typeof` 解掉 |
| `src/truthy-trap.ts` | p50 | `if (discountPrice)` 會把 0 排除 |
| `src/in.ts` | p51 | 用 `in` 分辨物件形狀 |
| `exercise/start.ts` | p53–54 | 練習起點：只有 loading 一種狀態 |
| `exercise/solution.ts` | p53–54 | 解答：三種狀態的可辨識聯集 |

## 執行

```bash
npm install
npm run check
```

`src/truthy-trap.ts` 可以直接跑來看 0 的差別：

```bash
node --experimental-strip-types src/truthy-trap.ts
```
