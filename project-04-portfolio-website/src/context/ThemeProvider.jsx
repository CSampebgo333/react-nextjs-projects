import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    document.documentElement.classList.add(theme);

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === "dark" ? "light" : "dark";
            document.documentElement.classList.remove("light", "dark");
            document.documentElement.classList.add(newTheme);
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