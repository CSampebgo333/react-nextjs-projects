import { useState, useEffect } from "react";

const ThemeToggle = () => {
  
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined"){
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        return storedTheme === "dark";
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className={
        "fixed bottom-7 right-7 z-50 bg-white dark:bg-gray-800 rounded-full p-3" + 
        " text-gray-700 dark:text-gray-200 hover:shadow-lg transition-all"
      }
    >
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;