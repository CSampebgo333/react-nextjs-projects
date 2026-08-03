import { createContext, useState, useContext } from "react";

const LanguageContext = createContext(undefined);

const translations = {
  en: {
    siteTitle: "StoryTime",
    storyList: "Story Collection",
    storyListSubtitle: "Discover timeless tales that spark imagination and teach valuable lessons",
    backToStories: "Back to Stories",
    readStory: "Read Story",
    loadingStories: "Loading magical stories...",
    loadingStory: "Loading your story...",
    author: "Author",
    selectLanguage: "Select Language",
    notFoundTitle: "Oops! Page Not Found!",
    notFoundMessage: "The page you're looking for doesn't exist or has been moved.",
    returnHome: "Return to Home",
    english: "English",
    french: "French",
    footerText: "Made with ❤️ for young readers everywhere",
  },
  fr: {
    siteTitle: "L'Heure du Conte",
    storyList: "Collection d'Histoires",
    storyListSubtitle: "Découvrez des contes intemporels qui stimulent l'imagination et enseignent de précieuses leçons",
    backToStories: "Retour aux Histoires",
    readStory: "Lire l'Histoire",
    loadingStories: "Chargement des histoires magiques...",
    loadingStory: "Chargement de votre histoire...",
    author: "Auteur ",
    selectLanguage: "Choisir la Langue",
    notFoundTitle: "Oups ! Page Non Trouvée !",
    notFoundMessage: "La page que vous recherchez n'existe pas ou a été déplacée.",
    returnHome: "Retourner à l'Accueil",
    english: "Anglais",
    french: "Français",
    footerText: "Fait avec ❤️ pour les jeunes lecteurs du monde entier",
  },
};


export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined){
        throw new Error("useLanguage must be use within a LanguageProvider!");
    }
    return context;
}

export const LanguageProvider = ({ children }) => {

    const [language, setLanguage] = useState("en");

    const translate = (key) => {
        return translations[language][key] || key;
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, translate }}>
            {children}
        </LanguageContext.Provider>
    );
}