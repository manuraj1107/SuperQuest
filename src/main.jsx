import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter} from 'react-router-dom'
import App from './App'
import { ResultContextProvider } from './contexts/ResultContextProvider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ResultContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ResultContextProvider>
  </React.StrictMode>
)
