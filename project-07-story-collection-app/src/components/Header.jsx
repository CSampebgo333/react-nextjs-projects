import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";
import LanguageToggle from "./LanguageToggle";

const Header = () => {

    const { translate } = useLanguage();

    return (
    <header className={
        "bg-linear-to-r from-purple-500 via-pink-500 to-orange-400" + 
        " shadow-lg"
    }>
        <div className="conatainer mx-auto px-3 py-5">
            <div className="flex justify-between items-center">
                <Link 
                    to="/"
                    className="flex space-x-3 items-center group"
                >
                    <div className={
                        "bg-white p-2 rounded-full shadow-md" + 
                        " group-hover:shadow-lg transition-shadow"
                    }>
                        <BookOpen className="w-9 h-9 text-purple-600"/>
                    </div>
                    <div>
                        <h1 className="drop-shadow-md text-3xl font-bold text-white">
                            {translate("siteTitle")}
                        </h1>
                        <p className="text-purple-100 text-sm">
                            {translate("storyList")}
                        </p>
                    </div>
                </Link>
                <LanguageToggle />
            </div>
        </div>
    </header>
    );
};

export default Header;