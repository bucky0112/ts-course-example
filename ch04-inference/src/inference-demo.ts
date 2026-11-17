// p22 型別自己在：把標註刪掉，滑鼠移上去，型別還在
// 分別把滑鼠移到三個變數上看型別

const productPrice1: number = 1280 // 有標註 → number
let productPrice2 = 1280 // 沒標註 → 還是 number

// 注意：const 推出來的是 1280，不是 number
// const 不能重新賦值，TypeScript 就直接記住「它永遠是 1280」
const productPrice3 = 1280
