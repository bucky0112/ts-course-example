// p45 不該組的時候：B 真的「就是」A 嗎？只是欄位剛好長得像，就不要組

interface Product {
  id: number
  name: string
  price: number
}

// 供應商也有 id 和 name，但供應商「不是」一種商品
// ✗ interface Supplier extends Product { phone: string }
//   這樣寫的話，Product 加了 price 以外的新欄位，Supplier 也被迫要有
interface Supplier {
  id: number
  name: string
  phone: string
}
