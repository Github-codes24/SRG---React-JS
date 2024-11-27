import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PaginationProvider } from './context/PaginationContext.jsx'

createRoot(document.getElementById('root')).render(
  <PaginationProvider>
    <App />

  </PaginationProvider>
  
)
