import { Link } from "react-router-dom";
import { BookOpen, User } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";


const StoryCard = ({ story }) => {

    const { translate } = useLanguage();

    const getStoryCardColor = (slug) => {
        const storyColors = {
            "tortoise-hare": "from-green-400 to-blue-500",
            "little-red-riding-hood": "from-red-400 to-pink-500",
            "three-little-pigs": "from-yellow-400 to-orange-500",
            "goldilocks-three-bears": "from-amber-400 to-yellow-500",
            "jack-beanstalk": "from-emerald-400 to-green-500",
            // Default for any other story
            "default": "from-purple-400 to-indigo-500",
        };
        return storyColors[slug] || storyColors["default"];
    }


    return (
    <div className={
        "bg-white rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2" + 
        " duration-300 overflow-hidden group"
    }>
        <div className={
            "h-32 p-5 flex items-center justify-center" + 
            ` bg-linear-to-br ${getStoryCardColor(story.slug)}`
        }>
            <BookOpen 
                className="w-12 h-12 text-white drop-shadow-md group-hover:scale-110 transition-transform"
            />
        </div>
        <div className="p-5">
            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                {story.title}
            </h3>
            <div className="flex items-center text-gray-600 mb-3">
                <User className="w-5 h-5 mr-2"/>
                <p>
                    {translate("author")}: {story.author}
                </p>
            </div>
            <p className={
                "text-gray-700 text-sm leading-relaxed mb-3 line-clamp-3"
            }>
                {story.content.replace(/\\n/g, " ").substring(0, 150)}...
            </p>
            <Link 
                to={`/story/${story.slug}`} 
                className={
                    "cursor-pointer inline-flex items-center space-x-2 text-white p-2" +
                    " bg-linear-to-r from-purple-500 to-pink-500 rounded-full" +
                    " hover:from-purple-600 hover:to-pink-600 transition-all duration-300" + 
                    " shadow-md hover:shadow-lg transform hover:scale-105"
                }
            >
                <BookOpen className="w-5 h-5 hover:transition-transform duration-300"/>
                <p className="font-medium">
                    {translate("readStory")}
                </p>
            </Link>
        </div>
    </div>
    );
};

export default StoryCard;