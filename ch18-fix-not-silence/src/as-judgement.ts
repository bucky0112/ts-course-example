// p12 as 的正當用法與濫用
// 判準：你說得出你比編譯器多知道哪一件事嗎？

// 1. 差太多的轉換：TS 直接擋下來（TS2352）
const price = '1280' as number

// 2. as unknown as：先轉成 unknown 再轉一次，紅線就消失了——這是最危險的寫法
const sneakyPrice = '1280' as unknown as number

// 3. 說得出理由的 as：index.html 裡 id="search" 的元素是 <input>，
//    TS 只知道它是 HTMLElement。這裡只補上「它是 input」這一件事，可能是 null 的部分留著
const searchBox = document.getElementById('search') as HTMLInputElement | null
if (searchBox) {
  console.log(searchBox.value)
}

// 4. @ts-expect-error：跟 @ts-ignore 一樣壓住下一行，但下一行沒有錯誤時它自己會報錯（TS2578）
// @ts-expect-error
const total: number = 1280
