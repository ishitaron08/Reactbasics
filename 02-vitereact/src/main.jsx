import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Ishit from './Ishit.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Ishit />
  </StrictMode>,
)
