import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Layout from './layouts/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import CompleteProfile from './components/CompleteProfile';
import Dashboard from './pages/dashboard';

const router = createBrowserRouter([
  // 🔓 Public Routes
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },

  {
      path: "/update-details",
        element: (
          <ProtectedRoute>
            <CompleteProfile />
          </ProtectedRoute>
        ),
      },

  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },

      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
