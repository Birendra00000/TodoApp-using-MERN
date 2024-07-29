import React, { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const storeData = JSON.parse(localStorage.getItem("user_data"));

  useEffect(() => {
    if (storeData) {
      const { userToken, user } = storeData;
      setToken(userToken);
      setUserData(user);
      setIsAuthenticated(true);
    } else {
      console.log("No user data found in localStorage");
    }
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
