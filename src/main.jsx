import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css'

import {TransactionProvider} from './context/TransactionContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <TransactionProvider>
  <React.StrictMode>
  <Router>
    <App />
  </Router>
  </React.StrictMode>
  </TransactionProvider>
)
