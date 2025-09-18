/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user,setUser]=useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    if(storedUser){
      setUser(JSON.parse(storedUser));
    }
    setToken(storedToken);
  }, []);

  const login = (tokenValue,user) => {
    localStorage.setItem("token", tokenValue);
    localStorage.setItem("user", JSON.stringify(user));
    setToken(tokenValue);
    setUser(user);
  };

  

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  


  return (
    <AuthContext.Provider value={ {token, login, logout,user} }>
      {children}
    </AuthContext.Provider>
  );
};

