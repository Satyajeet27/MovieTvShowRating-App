import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'

const queryClient= new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>

      <App />
      <ToastContainer />
    </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
