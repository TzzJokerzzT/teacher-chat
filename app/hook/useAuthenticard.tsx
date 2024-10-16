import { useEffect, useState } from "react";

// Custom Hook
export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const savedAuthState = localStorage.getItem("isAuthenticated");
    return savedAuthState ? JSON.parse(savedAuthState) : false;
  });

  const isLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", JSON.stringify(true)); // Guarda en localStorage
  };

  const isLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated"); // Remueve el valor de localStorage
  };

  useEffect(() => {
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  return { isAuthenticated, isLogin, isLogout };
};
