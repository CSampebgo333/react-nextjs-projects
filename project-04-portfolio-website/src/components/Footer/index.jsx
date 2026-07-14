const navLinks = [
    { label: "Home", target: "hero" },
    { label: "Projects", target: "projects" },
    { label: "Skills", target: "skills"},
    { label: "Recommendations", target: "recommendations"},
    { label: "Contact", target: "contact"},
]

const Footer = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-6 py-11 text-center">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 justify-between">
                <div className="text-xl font-bold text-gray-800 dark:text-white">
                    CLE<span className="text-blue-500">MSO</span>
                </div>
                <div className="flex flex-wrap gap-6 justify-center text-sm">
                    {navLinks.map(({ label, target }) => (
                        <a key={label}
                           href={`#${target}`}
                           className="transition hover:text-blue-500"
                        >
                            {label}
                        </a>
                    ))}
                </div>
            </div>
            <hr className="my-8 border-gray-300 dark:border-gray-700"></hr>
            <p className="text-sm text-gray-600 dark:text-gray-400">
                ©{new Date().getFullYear()} Clément. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer;