import { useState } from "react";
import ProjectCard from "./ProjectCard";
import projects from "../../data/projects";


const ProjectSection = () => {

    const uniqueTypes = ["All", ...new Set(projects.map((project) => project.type))];

    const [selectedType, setSelectedType] = useState("All");

    const filteredProjects = selectedType === "All"? projects : projects.filter((project) => project.type === selectedType);

    return (
        <section className="scroll-mt-24 min-h-screen py-20 text-center bg-white dark:bg-gray-900">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-white"> My Work </h2>
            <h3 className="text-4xl font-bold mb-8 text-blue-600 dark:text-blue-400">
                Featured Projects
            </h3>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {uniqueTypes.map((type, index) => (
                    <button key={index} 
                            className="px-4 py-2 rounded-full border text-sm font-medium cursor-pointer"
                            onClick={() => setSelectedType(type)}
                    >
                        {type}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {filteredProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
}

export default ProjectSection;