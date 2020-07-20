import React, { useState, createContext, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvidder = ({ children }) => {
  let history = useHistory();
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState();
  let location = useLocation();

  useEffect(() => {
    getToken();
  }, []);

  useEffect(() => {
    getUser();
  }, []);

  function getToken() {
    if (localStorage.getItem("token") !== null) {
      setLogged(true);
      if (location.pathname === "/") {
        history.push("/home");
      } else {
        history.push(location.pathname);
      }
    }
  }

  function getUser() {
    const userJSON = JSON.parse(localStorage.getItem("user"));
    if (userJSON) {
      setUser(userJSON);
    }
  }

  const handlerLoggedUser = (logged) => {
    setLogged(logged);
  };

  const addUser = (user) => {
    setUser(user);
  };

  const logout = () => {
    localStorage.clear();
    setUser();
    history.push("");
  };

  return (
    <AuthContext.Provider
      value={{ logged, user, addUser, handlerLoggedUser, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvidder;
