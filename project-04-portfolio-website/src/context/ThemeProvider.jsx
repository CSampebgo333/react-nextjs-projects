import { useState } from "react";
import { ThemeContext } from "./ThemeContext";


const ThemeProvider = ({ children }) => {

    const getInitialTheme = () => (
        localStorage.getItem("theme") || "light"
    );

    const [theme, setTheme] = useState(getInitialTheme);

    document.documentElement.classList.add(theme);

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === "dark" ? "light" : "dark";
            document.documentElement.classList.remove("light", "dark");
            document.documentElement.classList.add(newTheme);
            localStorage.setItem("theme", newTheme); 
            return newTheme;
        });
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;