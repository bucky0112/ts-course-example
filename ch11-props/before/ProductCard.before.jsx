// 章 11 起點：p3「ProductCard 回顧」用的 JavaScript 版元件
// 位置：ts-course-examples/ch11-props/before/ProductCard.before.jsx（完整專案裡對應 src/components/ProductCard.jsx）
//
// 這是本章的「改造前」狀態：能跑、能顯示，但 props 沒有任何型別。
// 沒修過 React 課的話，先讀本資料夾 README.md 的「這個元件在做什麼」一段，
// 讀完就能理解下面每一行在幹嘛，不需要回頭去看 React 課的教材。

function ProductCard({ name, price, image, onSale }) {
  return (
    <div className="card">
      <img className="card-image" src={image} alt={name} />
      <h3 className="card-name">{name}</h3>
      <p className="card-price">NT$ {price.toLocaleString()}</p>
      {onSale && <span className="card-badge">特價</span>}
    </div>
  )
}

export default ProductCard
