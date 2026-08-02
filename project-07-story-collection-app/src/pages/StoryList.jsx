import { useEffect, useState } from "react";
import StoryCard from "../components/StoryCard";
import { supabaseClient } from "../services/supabase";
import { useLanguage } from "../context/LanguageContext";


const StoryList = () => {

    useEffect(() => {
        const loadStories = async () => {
            
            };
            loadStories();

    },  []);

    return (
    <div>
    </div>
    );
};

export default StoryList;