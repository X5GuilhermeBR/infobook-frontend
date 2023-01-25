import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'

const root = ReactDOM.createRoot(document.getElementById('root')!)

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

reportWebVitals()
