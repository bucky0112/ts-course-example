// p24 空陣列的真相：滑鼠移到每一行的 cart 上看型別怎麼變

const cart = []
cart.push('經典帆布後背包')
cart // string[]

cart.push(1280)
cart // (string | number)[]
