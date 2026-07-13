const sections = ["hero", "projects", "skills", "recommendations", "contact"];

const ScrollDots = () => {
    return (
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-50">
            {sections.map((section) => 
            <a key={section} 
               href={`#${section}`} 
               className="w-3 h-3 rounded-full transition bg-gray-400 hover:bg-blue-500"/>)}

        </div>
    );
}

export default ScrollDots;