import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Route.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

  <div className=' lg:max-w-5xl  xl:max-w-7xl 2xl:max-w-[96rem] mx-auto'>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  </div>

)
