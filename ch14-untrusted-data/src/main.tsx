import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

// 不用 getElementById('root')! —— 章 18 會講為什麼 ! 是在掩蓋，而不是解決
const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('index.html 裡找不到 #root')
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
