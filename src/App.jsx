import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "./App.css"
import Home from './PARAMS/Home'
import Login from './Login'
import Cart from './Cart'
import Profile from './PARAMS/Profile'
import Index from './PARAMS/Index'

let router=createBrowserRouter([
  {
    path:"/",
    element:<Home></Home>,
    children:[
      {
        path:"/index",
        element:<Index></Index>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/cart",
        element:<Cart></Cart>

      },
      {
        path:"/Profile",
        element:<Profile></Profile>
      }
    ]
  }
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  )
}

export default App
