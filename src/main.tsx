import './reset.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home, Detail } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/posts/:id',
    element: <Detail />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
