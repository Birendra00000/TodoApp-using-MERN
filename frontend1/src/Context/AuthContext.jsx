import React, { createContext, useState, useEffect, useContext } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const storeData = JSON.parse(localStorage.getItem("user_data"));

  const isTokenExpired = (token) => {
    if (!token) return true;
    try {
      const decodedToken = jwtDecode(token);
      return decodedToken.exp * 1000 < Date.now();
    } catch (error) {
      return true;
    }
  };

  useEffect(() => {
    const verifyToken = async () => {
      if (storeData) {
        const { userToken, user } = storeData;
        if (isTokenExpired(userToken)) {
          logOut(); // Clear invalid token and user data
          console.log("Token expired, user logged out");
        } else {
          setToken(userToken);
          setUserData(user);
          setIsAuthenticated(true);
        }
      } else {
        console.log("No user data found in localStorage");
      }
    };

    verifyToken();
  }, []);

  const logIn = (newToken, newData) => {
    console.log(
      "Logging in with token:Authcontext",
      newToken,
      "and user data:",
      newData
    );
    localStorage.setItem(
      "user_data",
      JSON.stringify({ userToken: newToken, user: newData })
    );
    setToken(newToken);
    setUserData(newData);
    setIsAuthenticated(true);
  };

  const logOut = () => {
    localStorage.removeItem("user_data");
    setToken(null);
    setUserData(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ token, userData, isAuthenticated, logIn, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export const useAuth = () => useContext(AuthContext);
