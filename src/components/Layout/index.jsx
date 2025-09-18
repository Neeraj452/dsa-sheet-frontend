import { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Header from "../Header";
import useAuth from "../../hooks/useAuth";

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {token} = useAuth()
  useEffect(() => {
    if (!token) {
      navigate("/");
    } else {
      if (location.pathname === "/") {
        navigate("/profile");
      }
    }
  }, [token, location.pathname, navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-4 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
