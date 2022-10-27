import { createContext, useState } from "react";

export const NightModeContext = createContext();

const nightModeProvider = ({ children }) => {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleMode = () => {
    setIsNightMode((prevMode) => !prevMode);
    //false =>  !f
  };

  return (
    <NightModeContext.Provider value={{ isNightMode, toggleMode }}>
      {children}
    </NightModeContext.Provider>
  );
};
export default nightModeProvider;
