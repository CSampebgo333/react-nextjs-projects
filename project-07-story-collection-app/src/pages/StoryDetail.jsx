import { useParams, Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useState, useEffect } from "react";
import { supabaseClient } from "../services/supabase";

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
                                        .single(); // Expect only one result. Throw an erro if more than one results.
                if (error) throw error;
                console.log("Data Loaded: ", data)
                setStory(data);
            }
            catch (error) {
                console.log("Failed Loading Data: ", error.message);
            }
            finally {
                setLoading(false);
            } 
        }
        loadStory();
        
    }, [slug, language])

    return (
    <div>
    </div>
    );
};

export default StoryDetail;