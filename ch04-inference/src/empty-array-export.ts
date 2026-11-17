// p24 空陣列 export 出去 → never[]，什麼都放不進去

export const wishlist = []
wishlist.push('筆電內袋') // 紅線：string 不能放進 never
