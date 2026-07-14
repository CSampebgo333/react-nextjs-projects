import SkillCard from "./SkillCard";
import ExperienceItem from "./ExperienceItem";

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
                    <div>
                        Skils Icons Here
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