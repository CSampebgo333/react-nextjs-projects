import { useLanguage } from "../context/LanguageContext";
import { Globe } from "lucide-react";

const LanguageToggle = () => {

    const { language, setLanguage, translate } = useLanguage();

    const baseClass = "px-3 py-2 text-sm font-medium transition-all focus:outline-none cursor-pointer duration-300";

    const class1 = " bg-purple-500 text-white shadow-md";

    const class2 = " text-gray-600 hover:bg-blue-50 hover:text-purple-500 transition-colors";

    return (
    <div className="flex items-center space-x-3">
        <Globe className="w-6 h-6 text-purple-900"/>
        <div className={
            "flex bg-white rounded-full shadow-md" + 
            " overflow-hidden"
        }>
            <button
            onClick={() => setLanguage("en")}
            className={
                baseClass + `${language === "en"? class1: class2}`
            }
            >
                {translate("english")}
            </button>
            <button
                onClick={() => setLanguage("fr")}
                className={
                    baseClass + `${language === "fr"? class1: class2}`
                }
            >
                {translate("french")}
            </button>
        </div>
    </div>
    );
};

export default LanguageToggle;