import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';


const router = createBrowserRouter([
  {
        path: "/",
        element: <Home />
      },
      {
        path: "/products",
        element: <Products />
      },
    
  
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<RouterProvider router={router} />);
