import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
import { MainProvider } from './context/MainContext.jsx';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <MainProvider>
        <App />
    </MainProvider>
    </BrowserRouter>
  </StrictMode>,
)
