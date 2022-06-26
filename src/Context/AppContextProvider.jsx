import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const token = "sdfsdfff";
  const [auth, setIsAuth] = useState(false);
  const changeAuth = () => {
    setIsAuth(!auth);
  };

  return (
    <AppContext.Provider value={{ token, auth, changeAuth }}>
      {children}
    </AppContext.Provider>
  );
};
