const ProjectCard = ({ project }) => {
    
    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border dark:border-gray-700 overflow-hidden">
            <div className="relative">
                <img src={project.image}
                     alt={project.title}
                     className="w-full h-48 object-cover"
                />
                <span className="absolute top-2 right-2 text-xs font-semibold text-blue-600 dark:text-white px-2 py-1 rounded-full shadow bg-blue-100 dark:bg-linear-to-r dark:bg-from-blue-800 dark:to-blue-600">
                    {project.type}
                </span>
            </div>
            <div className="p-4 text-left">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {project.title}
                </h4>
                <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
                    {project.description}
                </p>
            </div>
        </div>
    );
}

export default ProjectCard;