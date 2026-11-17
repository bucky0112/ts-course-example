# 第 2 章：把 TS 編譯成 JS

只有 TypeScript，沒有 Vite，看 `tsc` 單獨做了什麼。

| 簡報 | 檔案 | 看什麼 | 指令 |
|---|---|---|---|
| p9 | `src/hello.ts` → `dist-tsc/hello.js` | 左右對照：型別標註全部不見了。右邊多了分號、縮排變 4 格，是 tsc 的輸出格式 | `npm run build` → `npm start` |
| p10 | `tsconfig.json` | 只看 `"strict": true` 這一行，其他欄位現在不用管 | — |
| p11 | `lab/product.before.js`、`lab/tsconfig.json` | 改名成 `.ts` 後有 5 條紅線；`strict` 改 `false` 剩 1 條 | 見下方「p11／p12 步驟」 |
| p12 | 同上 | 練習：自己做一次 p11，記下幾條、各在第幾行 | 同上 |

## 執行

```bash
npm install
npm run build    # = tsc，把 src/*.ts 編譯到 dist-tsc/
npm start        # 用 node 執行編譯出來的 dist-tsc/hello.js
```

`npm run build` 預期 **0 個錯誤**。

### p9 觀察重點

- 編譯結果最後多一行 `export {};`，是 `moduleDetection: "force"` 把檔案當成 module 造成的。簡報截圖沒有這行。
- 在 `hello.ts` 故意寫錯（例如 `const productPrice: number = '1280'`）再跑 `npm run build`：
  `tsc` 會報錯，但預設還是會產生 `.js`。檢查跟丟掉型別是兩件各自獨立的事。

## p11／p12 步驟：`strict` 開與關

`lab/product.before.js` 是一份沒有任何型別標註的商品程式，搭配 `lab/tsconfig.json`（只檢查、不輸出）。

```bash
npm run check:lab                          # = tsc -p lab。改名前：0 條
mv lab/product.before.js lab/product.ts    # 1. 改名成 .ts
npm run check:lab                          # 2. strict: true → 5 條
# 3. 打開 lab/tsconfig.json，把 "strict": true 改成 "strict": false
npm run check:lab                          #    strict: false → 1 條
# 4. 把 "strict" 改回 true
```

實測結果（TypeScript 7.0.2）：

| 狀態 | 錯誤數 | 內容 |
|---|---|---|
| 改名前（`.js`） | **0** | `.js` 只收進來、不做檢查 |
| 改名後，`strict: true` | **5** | 第 23 行 `price`、第 28 行 `list` 和 `keyword`、第 29 行 `item`：TS7006 參數隱含 any；第 34 行：TS2339 `discount` 不存在 |
| 改名後，`strict: false` | **1** | 只剩第 34 行的 TS2339：`product.discount` 這個欄位不存在 |

- 要關掉請**明寫 `"strict": false`**。TypeScript 6 以後 `strict` 預設是 `true`，把那行註解掉等於沒關。
- 關掉少了 4 條，但 `discount` 那 1 條還在：它不是嚴不嚴格的問題，是真的寫錯了。關掉檢查跟解決問題是兩件事。
- 收工前 `lab/tsconfig.json` 一定要是 `strict: true`。這章不要求修好紅線。
- 想重來一次：`mv lab/product.ts lab/product.before.js`。
