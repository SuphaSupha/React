import { createContext, useState } from "react";

export const LenguageModeContext = createContext();

const LenguageModeProvider = ({ children }) => {
  const [isLenguageMode, setIsLenguageMode] = useState(false);

  const modeToggle = () => {
    setIsLenguageMode((prevMode) => !prevMode);

    // false => !false (true)
    // true => !true (false)
  };
  localStorage.setItem("Theme", JSON.stringify(isLenguageMode));
  const getThemeInStorage = () => {
    localStorage.getItem("Theme", JSON.stringify(isLenguageMode)); // returns 'light' in this case
  };
  getThemeInStorage();
  return (
    <LenguageModeContext.Provider value={{ isLenguageMode, modeToggle }}>
      {children}
    </LenguageModeContext.Provider>
  );
};

export default LenguageModeProvider;
