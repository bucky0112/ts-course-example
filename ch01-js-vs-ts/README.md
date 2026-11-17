# 第 1 章：JS 沒紅線，TS 有紅線

同一段程式碼，`src/main.js` 和 `src/main.ts` 內容完全一樣。

## 執行

```bash
npm install
npm run dev
```

打開終端機顯示的網址（預設 http://localhost:5173）。

## 示範順序

1. 在編輯器打開 `src/main.js`：沒有任何紅線。
2. 瀏覽器開 `/js.html`，打開 Console：`TypeError: Cannot read properties of undefined (reading 'rate')`，畫面停在「（還沒算完）」。
3. 在編輯器打開 `src/main.ts`：`item.memberDiscount` 底下有紅線（TS18048）。
4. 瀏覽器開 `/ts.html`：一樣壞掉。Vite 開發模式只拿掉型別、不做檢查，紅線只是提醒。
5. 執行 `npm run build`：`tsc` 先檢查，發現錯誤就停下來，不會打包。
