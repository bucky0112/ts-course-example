// p3 一則錯誤訊息的結構：位置、實際、期望、來源
// 跑 npm run check，對照終端機輸出：
//   src/anatomy.ts:13:3              ← 位置（檔案:行:欄）
//   Type 'string' is not assignable to type 'number'.
//         ↑ 實際（你給的）                    ↑ 期望（它要的）
//   The expected type comes from property 'price' ...  ← 來源：期望是從哪裡來的

import type { Product } from './product'

const backpack: Product = {
  id: 1,
  name: '經典帆布後背包',
  price: '1280',
  onSale: true,
  category: 'backpack',
}
