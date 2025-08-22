import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import MaximillionSmart from './pages/Authors/MaximillionSmart.jsx'


  const router=createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        // {
        //   path:'',
        //   element:<Home/>
        // },
        {
          path:'',
          element:<MaximillionSmart/>
        }
    ]

    }
  ])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App/>
  </RouterProvider>
 
)
