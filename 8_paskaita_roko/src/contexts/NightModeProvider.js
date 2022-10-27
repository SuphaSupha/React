import { createContext, useEffect, useState } from "react";

export const NightModeContext = createContext();

const NightModeProvider = ({ children }) => {
  const [isNightMode, setIsNightMode] = useState(false);

  useEffect(() => {
    const nightMode = localStorage.getItem("mode");

    if (nightMode !== null) {
      const modeIsTrue = nightMode === "true";
      setIsNightMode(modeIsTrue);
    }
  }, []);

  const toggleMode = () => {
    setIsNightMode((prevMode) => !prevMode);

    localStorage.setItem("mode", !isNightMode);
    // false => !false (true)
    // true => !true (false)
  };

  return (
    <NightModeContext.Provider value={{ isNightMode, toggleMode }}>
      {children}
    </NightModeContext.Provider>
  );
};

export default NightModeProvider;
