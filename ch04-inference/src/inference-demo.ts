// p22 型別自己在：把標註刪掉，滑鼠移上去，型別還在
// 分別把滑鼠移到兩個變數上看型別，兩個都是 number

// 標了
let productPrice1: number = 1280

// 沒標
let productPrice2 = 1280

// ── 被問到才看：為什麼不用 const ──
// const 推出來的是 1280，不是 number（const 不能重新賦值，TypeScript 直接記住「它永遠是 1280」）
const productPrice3 = 1280
