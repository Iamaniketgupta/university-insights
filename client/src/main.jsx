import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { store } from './store/slices/store.js'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
      <App />
  </Provider>
  <ToastContainer/>

    </BrowserRouter>
  ,
)
