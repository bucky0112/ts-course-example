// p57 三個函式並排，只有型別不一樣

interface Product {
  id: number
  name: string
  price: number
}

interface Order {
  id: number
  total: number
}

interface Customer {
  id: number
  email: string
}

function findProductById(list: Product[], id: number) {
  return list.find((item) => item.id === id)
}

function findOrderById(list: Order[], id: number) {
  return list.find((item) => item.id === id)
}

function findCustomerById(list: Customer[], id: number) {
  return list.find((item) => item.id === id)
}
