import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Products from './components/Products/Products';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import ProductDetails from './components/ProductDetails/ProductDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';




const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/products',
        loader: () => fetch('https://dummyjson.com/products'),
        element: <Products></Products>
      },
      {
        path: '/products/:productId',
        loader: ({ params }) => fetch(`https://dummyjson.com/products/${params.productId}`),

        element: <ProductDetails></ProductDetails>
      },
      {
        path: '/about',
        element: <About></About>

      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/services',
        element: <Services></Services>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
