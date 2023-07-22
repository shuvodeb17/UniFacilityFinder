import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import router from './route/route.jsx';
import { RouterProvider } from "react-router-dom";
import './index.css'
import AuthProvider from './providers/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
