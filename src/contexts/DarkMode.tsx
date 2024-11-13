import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

type ContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const DARK_MODE = 'DARK_MODE';

const darkModeContext = createContext<ContextType>({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark', !isDarkMode);
    document.body.style.backgroundColor = !isDarkMode ? '#111827' : '#FFF';
    localStorage.setItem(DARK_MODE, String(!isDarkMode));
  };

  useEffect(() => {
    const getIsDarkMode = localStorage.getItem(DARK_MODE) === 'true';

    setIsDarkMode(getIsDarkMode);
    document.body.classList.toggle('dark', getIsDarkMode);
    document.body.style.backgroundColor = getIsDarkMode ? '#111827' : '#FFF';

    // Clean up event listener
    return () => {
      document.body.classList.remove('dark');
    };
  }, []);

  return (
    <darkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </darkModeContext.Provider>
  );
};

export { DarkModeProvider };

export const useDarkMode = () => {
  return useContext(darkModeContext);
};
