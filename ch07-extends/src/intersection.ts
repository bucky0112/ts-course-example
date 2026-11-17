// p44 交集型別：用 & 把兩份各自存在的形狀疊起來

interface Product {
  readonly id: number
  name: string
  price: number
}

type AdminFields = {
  cost: number
  supplier: string
}

type AdminProduct = Product & AdminFields

const adminProduct: AdminProduct = {
  id: 1,
  name: '經典帆布後背包',
  price: 1280,
  cost: 520,
  supplier: '台南帆布行',
}
