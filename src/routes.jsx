// src/routes.js
import Login from "./components/Login";
import Profile from "./components/Profiles";
import Topics from "./components/Topics";
import Layout from "./components/Layout";
import { Navigate, useRoutes } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/context";
import ProgressReports from "./components/progress";


const AppRoutes = () => {
  
  const {token}= useContext(AuthContext);
  const guestRoutes = [
    {
      path: "/",
      element: <Login />
    },{
      path: "*",
      element: <Navigate to="/" replace />
    }
  ]
  const authRoutes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/profile", element: <Profile /> },
        { path: "/topics", element: <Topics /> },
        {path:"/progress",element:<ProgressReports/>}
      ]

    }
  ]

  const routes = token ? authRoutes : guestRoutes;

  return useRoutes(routes);
};

export default AppRoutes;
