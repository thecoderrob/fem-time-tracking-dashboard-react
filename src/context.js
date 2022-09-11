import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [timeframe, setTimeframe] = useState("daily");

  return (
    <AppContext.Provider
      value={{
        timeframe,
        setTimeframe,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
