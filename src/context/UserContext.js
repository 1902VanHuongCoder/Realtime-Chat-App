import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [room, setRoom] = useState(null);
  return (
    <AppContext.Provider value={{ room, user, setUser, setRoom }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
