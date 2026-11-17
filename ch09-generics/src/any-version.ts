// p58 改成 any：三個變一個，但你也失去了全部提示
// 在 found 後面打一個點，什麼都沒跳出來

interface Product {
  id: number
  name: string
  price: number
}

const products: Product[] = [{ id: 1, name: '經典帆布後背包', price: 1280 }]

function findById(list: any[], id: number) {
  return list.find((item) => item.id === id)
}

const found = findById(products, 1)
found.naem // 打錯字沒紅線
found.whatever() // 不存在的方法也能呼叫
