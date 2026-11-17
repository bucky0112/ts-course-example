# 第 1 章：JS 沒紅線，TS 有紅線

同一段程式碼寫兩份：`src/js/` 是 JavaScript，`src/ts/` 是 TypeScript。兩份的資料和算式一樣，只差 TS 版的 `salePrice` 參數多了型別標註。

bug 是：只有第一個商品有 `discount`，第二個沒有，`salePrice` 去讀 `undefined` 的 `rate`。

| 簡報 | 檔案 | 看什麼 | 指令 |
|---|---|---|---|
| p3 | `src/js/main.js`、`src/js/price.js`、`src/js/products.js`、`js.html` | 編輯器沒有紅線；瀏覽器開 `/js.html`，Console 出現 `TypeError: Cannot read properties of undefined (reading 'rate')`，stack 是 `salePrice (price.js:2:54)` → `main.js:6:36`，跟簡報截圖一樣。畫面停在「（還沒算完）」 | `npm run dev` |
| p4 | `src/ts/price.ts`、`ts.html` | 同一段程式碼，`product.discount` 底下有紅線：TS18048 `'product.discount' is possibly 'undefined'`。瀏覽器開 `/ts.html` 還是一樣壞掉：Vite 開發模式只拿掉型別，不做檢查，紅線只是提醒 | `npx tsc` |
| p4 | 全部 | `tsc` 先檢查，發現錯誤就停下來，不會打包 | `npm run build` |

## 執行

```bash
npm install
npm run dev      # 打開終端機顯示的網址（預設 http://localhost:5173）
npx tsc          # 只做型別檢查
```

預期 `tsc` 只有 **1 個錯誤**：`src/ts/price.ts(2,37): error TS18048`。

- TS 版的參數標成 `discount?: { rate: number }`（可選的），所以唯一的錯誤是「可能是 undefined」。參數如果不標，會先出現 TS7006（參數隱含 any），蓋過這個錯誤。
- `main` 的第 4 行用 `document.body`，簡報截圖的來源是 `document.querySelector('#app')`。這樣改是為了避免 TS 多報一個「可能是 null」的錯誤，不影響 stack 的行號和欄位。
