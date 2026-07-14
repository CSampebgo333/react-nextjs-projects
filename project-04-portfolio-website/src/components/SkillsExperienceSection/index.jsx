import SkillCard from "./SkillCard";
import ExperienceItem from "./ExperienceItem";

import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaNodeJs,
    FaPython,
    FaGitAlt,
    FaGithub,
    FaNpm,
    FaJs, 
    FaJava,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiVite,
  SiPostgresql,
  SiMysql,
  SiFlutter,
} from "react-icons/si"; 

const skills = [
  { name: "React", icon: <FaReact className="text-sky-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "Vite", icon: <SiVite className="text-violet-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Python", icon: <FaPython className="text-yellow-500" /> },
  { name: "Java", icon: <FaJava className="text-red-600" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-900 dark:text-white" /> },
  { name: "npm", icon: <FaNpm className="text-red-600" /> },
  { name: "Flutter", icon: <SiFlutter className="text-sky-400" /> },
];

const SkillsExperienceSection = () => {
    return (
        <section className="min-h-screen py-20">
            <h2 className="text-3xl font-semibold text-center">
                Skills and Experience
            </h2>
            <h3 className="text-4xl text-center font-bold mb-16 text-blue-600 dark:text-blue-400">
                What I Do and Where I've Been
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl gap-12 mx-auto">
                <div>
                    <h4 className="text-2xl font-semibold mb-4">Skills</h4>
                    <div className="grid grid-cols-3 gap-6">
                        {skills.map((skill, index) => (
                            <SkillCard key={index} icon={skill.icon} name={skill.name} />
                        ))}
                    </div>
                </div>
                <div>
                    <h4 className="text-2xl font-semibold mb-4">Experience</h4>
                </div>
            </div>
        </section>
    )
}

export default SkillsExperienceSection;