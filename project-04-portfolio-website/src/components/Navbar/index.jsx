import { useState } from "react";
import { useTheme } from "../../context/useTheme";
import { Sun, Moon, Menu, X } from "lucide-react";

const Navbar = () => {

    const { theme, toggleTheme } = useTheme();

    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { label: "Home", target: "hero" },
        { label: "Projects", target: "projects" },
        { label: "Skills", target: "skills"},
        { label: "Recommendations", target: "recommendations"},
        { label: "Contact", target: "contact"},
    ]

    return (
        <nav className="bg-white dark:bg-gray-900 dark:text-white shadow-md fixed top-0 left-0 right-0 z-50"> 
            <div className="flex justify-between items-center max-w-7xl mx-auto p-6">
                <h1 className="text-xl font-bold"> 
                    SIM<span className="text-blue-500">BA</span>
                </h1>

                <div className="hidden md:flex items-center gap-6">
                {navLinks.map(({ label, target }) => (
                <a key={label} 
                href={`#${target}`}
                className="transition hover:text-blue-500">
                    { label }
                </a>
                ))}
                <button onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer">
                    {theme === "dark"? <Sun size={20} /> : <Moon size={20}/>}
                </button>
                </div>
                <button onClick={() => setMenuOpen((prevMenu) => !prevMenu)}
                    className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer">
                    {menuOpen? <X size={20}/> : <Menu size={20}/>}
                </button>
            </div>
            {menuOpen && (
                <div className="md:hidden flex flex-col items-starts px-4 pb-6 space-y-4">
                    {navLinks.map(({ label, target }) => (
                        <a key={label}
                            href={`#${target}`}
                            onClick={() => setMenuOpen(false)}
                            className="transition hover:text-blue-500">
                            {label}
                        </a>
                    ))}
                    <button onClick={toggleTheme}
                        className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer">
                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>
            )}
            
        </nav>
    );
}

export default Navbar;