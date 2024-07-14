import React, { createContext, useState, useEffect } from "react";

const authContext = createContext();

const AuthContext = ({ children }) => {
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
      console.log("No user data is found");
    }
  });

  return <div>AuthContext</div>;
};

export default AuthContext;

export const useAuth = () => useContext(authContext);
