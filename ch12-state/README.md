# 第 12 章：狀態也要說清楚（useState / useRef）

| 簡報 | 檔案 | 看什麼 | 指令 |
|---|---|---|---|
| p10 | `src/state-inferred.tsx` | 有初始值就推得出來：懸停 `count: number`、`query: string`，0 條紅線 | 編輯器懸停 |
| p11 | `src/state-inference-fails.tsx` | `useState(null)` → set 商品時 TS2345；`useState([])` → TS2322 `Type 'Product' is not assignable to type 'never'.`；map 裡讀欄位 → 2 × TS2339 | `npm run check` |
| p12 | `src/state-generic.tsx` | 補上 `useState<Product[]>`、`useState<Product \| null>`；`selected.name` → TS18047 | `npm run check` |
| p13 | `src/search-ref.tsx` | `inputRef.current.focus()` → TS18047，先檢查 null 才安全；`useRef<T>()` 不給參數 → TS2554（React 19 型別） | `npm run check` |
| p14 | `exercise/start/`（＝章 11 解答 ＋ `data.ts`）→ `exercise/solution/` | 三個狀態只有兩個需要泛型；useRef 存取前檢查 null，不用 `!` | `npm run check` |

`src/data.ts` 與 `exercise/*/data.ts` 是本機商品資料 `sampleProducts`，章 14 才改成從 API 取得。

## 執行

```bash
npm install
npm run dev      # 看畫面；Vite 開發模式不做型別檢查
npm run check    # = tsc，只檢查不輸出
```

預期：`npm run check` **7 個錯誤**，全部是 `src/` 刻意留下的示範——`state-inference-fails.tsx` 4 個（TS2345、TS2322、2 × TS2339）、`state-generic.tsx` 1 個（TS18047）、`search-ref.tsx` 2 個（TS18047、TS2554）。`exercise/` 底下 0 個。

練習是一章接一章的：`exercise/start/` 是章 11 的解答，多一份 `data.ts`；本章的 `exercise/solution/` 就是章 13 的起點。
