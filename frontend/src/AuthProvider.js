import React, {  useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from './AuthContext';



const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);


  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    if (token) {
      setAuthToken(token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
