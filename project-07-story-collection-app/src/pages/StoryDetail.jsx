import { useParams, Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useState, useEffect } from "react";
import { supabaseClient } from "../services/supabase";
import LoadingScreen from "../components/LoadingScreen";
import { ArrowLeft, BookOpen, User } from "lucide-react";

// Function to determine background gradient based on story slug
const getStoryGradient = (storySlug) => {
    const gradients = {
        "tortoise-hare": "from-green-400 via-blue-500 to-purple-600",
        "little-red-riding-hood": "from-red-400 via-pink-500 to-rose-600",
        "three-little-pigs": "from-yellow-400 via-orange-500 to-red-600",
        "goldilocks-three-bears": "from-amber-400 via-yellow-500 to-orange-600",
        "jack-beanstalk": "from-emerald-400 via-green-500 to-teal-600",
    };
    return gradients[storySlug] || "from-purple-400 via-pink-500 to-indigo-600";
};

const StoryDetail = () => {

    const { slug } = useParams();
    console.log(slug);

    const { language, translate } = useLanguage();

    const [story, setStory] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadStory = async () => {
            setLoading(true);
            try {
                const { data, error } = await supabaseClient
                                        .from("stories")
                                        .select("*")
                                        .eq("slug", slug)
                                        .eq("language", language)
                                        .single();
                if (error) throw error;
                setStory(data);
                console.log("Data Loaded: ", data);
            }
            catch (error) {
                console.log("Failed Loading Data: ", error.message);
                setStory(null);
            }
            finally {
                setLoading(false);
            } 
        };
        loadStory();
        
    }, [slug, language]);

    if (loading) {
        return <LoadingScreen message={translate("loadingStory")} />;
    }

    if (!story) {
        return (
            <div className="min-h-screen bg-linear-to-r from-purple-50 via-pink-50 to-orange-50 flex items-center justify-center">
                <div className="text-center p-8 bg-white rounded-xl shadow-md max-w-md mx-auto">
                    <BookOpen className="w-16 h-16 text-amber-600 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-stone-800 mb-2">
                        Story Not Found!
                    </h2>
                    <p className="text-stone-600 mb-6">
                        The story you're looking for doesn't exist or has been moved.
                    </p>
                    <Link 
                        to="/"
                        className="inline-flex items-center gap-3 bg-amber-700 text-white rounded-full px-6 py-3 hover:bg-amber-600 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span>{translate("backToStories")}</span>
                    </Link>
                </div>
            </div>
        );
    }

    // Get the gradient for this story
    const gradient = getStoryGradient(story.slug);

    return (
        <div className={`min-h-screen bg-linear-to-r ${gradient} py-8`}>
            <div className="container mx-auto px-4 max-w-4xl">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors mb-6 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-black/30"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span className="font-medium">{translate("backToStories")}</span>
                </Link>
                
                <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-8">
                    <h1 className="text-3xl font-bold text-stone-800 mb-4">
                        {story.title}
                    </h1>
                    <div className="flex items-center gap-2 text-stone-600 mb-6">
                        <User className="w-5 h-5" />
                        <span>{translate("author")}: {story.author}</span>
                    </div>
                    <div className="prose prose-stone max-w-none">
                        <p className="text-stone-700 leading-relaxed whitespace-pre-wrap">
                            {story.content}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoryDetail;