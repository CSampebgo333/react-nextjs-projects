import { LanguageProvider, useLanguage } from "../context/LanguageContext";

const LanguageTest = () => {
    const { language, setLanguage, translate } = useLanguage();

    return (
        <div className="p-7 space-y-5">
            <h1 className="text-2xl font-bold">{translate("siteTitle")}</h1>
            <p>Current Language: {language}</p>
            <div className="space-x-3">
                <button
                    onClick={() => setLanguage("en")}
                    className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
                >
                    English
                </button>
                <button
                    onClick={() => setLanguage("fr")}
                    className="bg-pink-500 text-white px-4 py-2 rounded cursor-pointer"
                >
                    Français
                </button>
            </div>
        </div>
    )
}

export default LanguageTest;