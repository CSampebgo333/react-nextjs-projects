import { useLanguage } from "../context/LanguageContext";
import { Heart } from "lucide-react";

const Footer = () => {

    const { translate } = useLanguage();

    return (
    <footer className="bg-gray-800 text-white py-7 mt-12">
        <div className="container mx-auto px-5 text-center">
            <div className="flex items-center justify-center space-x-3 mb-5">
                <Heart className="w-5 h-5 text-red-400 animate-pulse"/>
                <p>{translate("footerText")}</p>
                <Heart className="w-5 h-5 text-red-400 animate-pulse"/>
            </div>
            <p>
                © { new Date().getFullYear() } StoryTime - {translate("storyList")} 
            </p>
        </div>
    </footer>
    );
};

export default Footer;