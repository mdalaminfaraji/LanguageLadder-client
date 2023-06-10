import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Route.jsx';
import AuthProvider from './Providers/AuthProviders.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

  <div className=' lg:max-w-5xl  xl:max-w-7xl 2xl:max-w-[96rem] mx-auto'>
  <AuthProvider>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  </AuthProvider>
  </div>

)
