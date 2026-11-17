# 第 11 章：元件到底收什麼（Props 型別）

> **目前只有 p3 的起點檔。** 可執行的 Vite + React + TS 專案（`src/`、`exercise/`、`npm run check`）會在下一個 change 補上，屆時這份 README 會換成跟其他章一樣的「簡報｜檔案｜看什麼｜指令」對照表。

| 簡報 | 檔案 | 看什麼 |
|---|---|---|
| p3 | `before/App.before.jsx`、`before/ProductCard.before.jsx`、`before/index.css` | React 課 ProductCard 的 JavaScript 版起點：能跑、能顯示，props 沒有任何型別 |

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
