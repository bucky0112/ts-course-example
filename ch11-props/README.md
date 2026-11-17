# 第 11 章：元件到底收什麼（Props 型別）

| 簡報 | 檔案 | 看什麼 | 指令 |
|---|---|---|---|
| p3 | `before/App.before.jsx`、`before/ProductCard.before.jsx` | React 課 ProductCard 的 JavaScript 版起點：能跑、能顯示，props 沒有任何型別；畫面見 `src/App.tsx` 渲染的三張卡 | `npm run dev` |
| p4 | `src/props-any.tsx` | 改成 .tsx 後，元件那一行 4 條 TS7031（會紅線的 any）；沒傳 `onSale` 的兩張卡各 1 條 TS2741（假警訊）；`price="1450"` 不會紅 | `npm run check` |
| p4 誤區 | `src/jsx-in-ts.ts` | JSX 存成 .ts：TS1005、TS1161 語法錯誤 | `npm run check:ts-ext` |
| p5 | `src/components/ProductCard.tsx`、`src/props-typed.tsx` | props 用 `Pick<Product, …>` 從 `Product` 裁出；字串價格 TS2322、少傳 `image` TS2741、`imgae` 打錯 TS2322（Did you mean 'image'?） | `npm run check` |
| p6 | `src/optional-default.tsx` | `Partial<Pick<Product, 'onSale'>>` 變可選，再給 `= false` 預設值；可選數字直接用 → TS18048 | `npm run check` |
| p7 | `exercise/start/`（.jsx） | 練習起點：把 ProductCard、Header、ProductList 改成 .tsx 並補型別，完成後 0 個錯誤 | `npm run check` |

`src/types.ts` 是章 10 的 `Product` 補上 `image`。`src/App.tsx` 用的是 p6 完成版的 `ProductCard`。

## 執行

```bash
npm install
npm run dev      # 看畫面（p3）；Vite 開發模式不做型別檢查
npm run check    # = tsc，只檢查不輸出
```

預期：`npm run check` **10 個錯誤**，全部是 `src/` 刻意留下的示範——`props-any.tsx` 6 個（4 × TS7031、2 × TS2741）、`props-typed.tsx` 3 個（TS2322、TS2741、TS2322）、`optional-default.tsx` 1 個（TS18048）。`exercise/` 底下 0 個：`start/` 是 .jsx 不做型別檢查。

`npm run check:ts-ext` 預期 3 個語法錯誤（2 × TS1005、TS1161）。

`public/` 的三張商品圖是純色佔位圖。

## 這個元件在做什麼

**本段不預設你上過 React 課。** 讀完這一段就能理解 `ProductCard.before.jsx` 的每一行。

`ProductCard` 收下一筆商品資料，畫出一張商品卡片。它需要四個值：

| 名稱 | 意義 | 範例 |
|---|---|---|
| `name` | 商品名稱，顯示在卡片標題 | `"經典帆布後背包"` |
| `price` | 價格，顯示時會加上千分位 | `1280` |
| `image` | 圖片網址 | `"/backpack.jpg"` |
| `onSale` | 是否特價，為真時右上角顯示「特價」標籤 | `true` |

這四個值合稱 **props**，是使用這個元件的人從外面傳進來的。元件本身只負責把它們畫出來，不去改它們。

`App.before.jsx` 用了三次 `ProductCard`，每次傳不同的商品——**同一個元件，不同的資料，畫出三張不一樣的卡片**。

### 起點碼目前的問題

四個 props **完全沒有型別**。`App.before.jsx` 第三張卡刻意把 `price` 傳成字串 `"1450"` 而不是數字 `1450`：目前沒有任何紅線，但畫面上會顯示 `1450` 而不是 `1,450`——字串的 `toLocaleString()` 不會加千分位。本章要做的就是讓這種錯誤在寫程式的當下就被抓到。
