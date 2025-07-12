import React from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Layout from './layouts/Layout';

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App