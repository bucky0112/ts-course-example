// 章 11 soft bridge 起點碼：p3「ProductCard 回顧」
// 位置：ts-course-examples/ch11-props/before/App.before.jsx（完整專案裡對應 src/App.jsx）
//
// 用途：讓 ProductCard 有地方被使用，p4 的「props 現在是 any」才示範得出來。
// 第三張卡刻意把 price 傳成字串（"1450"），是 p4 要示範的錯誤——
// 在還沒有型別的情況下，這行不會有任何紅線；畫面上會顯示 1450 而不是 1,450（少了千分位），
// 因為字串的 toLocaleString() 不會幫你加逗號。

import ProductCard from './components/ProductCard'

function App() {
  return (
    <div className="page">
      <header className="site-header">
        <h1>商品列表</h1>
      </header>

      <div className="product-list">
        <ProductCard name="經典帆布後背包" price={1280} image="/backpack.jpg" onSale />
        <ProductCard name="輕量筆電內袋" price={890} image="/sleeve.jpg" />
        <ProductCard name="皮革證件套" price="1450" image="/cardholder.jpg" />
      </div>
    </div>
  )
}

export default App
