import { useState } from "react";

const SearchBar = ({ onCitySelect }) => {

    const [query, setQuery] = useState("");

    const [suggestions, setSuggestions] = useState([]);

    const handleInputChange = async (event) => {

        const newQuery = event.target.value;

        setQuery(newQuery);
        
        if (newQuery.length >= 3) {
            try {
                //Base URL of the API
                const baseUrl = "https://geocoding-api.open-meteo.com/v1/search";

                const enCodedCityName = encodeURIComponent(newQuery);

                const url = `${baseUrl}?name=${enCodedCityName}&count=5`;

                const response = await fetch(url);

                const data = await response.json();

                if(data.results) {
                    setSuggestions(data.results);
                } else {
                    setSuggestions([]);
                }

                console.log("API Response:", data);

            } catch (error) {
                console.error("Error fetching city suggestions:", error);
                setSuggestions([]);
            } 
        } else {
            setSuggestions([]);
        }
    }

    const handleSuggestionClick = (city) => {
        setQuery(city.name);
        setSuggestions([]);
        onCitySelect(city);
    }

    return (
        <div className="relative max-w-md mx-auto mb-8">
            <input 
                type="text"
                placeholder="Search for a city..."
                value={query}
                onChange={handleInputChange}
                className={
                    "w-full pl-4 pr-4 py-3 rounded-xl bg-white/20 backdrop-blur-md border" + 
                    " border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2" + 
                    " focus:ring-white/50 focus:border-transparent transition-all duration-300 ease-in-out"
                }
            >
            </input>
            {suggestions.length > 0 && (
                <ul className={
                    "absolute top-full left-0 right-0 mt-2 border border-white/30" + 
                    " bg-white/95 backdrop-blur-md rounded-xl shadow-lg z-50 overflow-hidden"
                }>
                    {suggestions.map((city, index) => (
                        <li 
                            key={index}
                            className={
                                "px-4 py-2 text-left text-gray-700 cursor-pointer" +
                                " hover:bg-blue-50 rounded-md transition-colors duration-200" + 
                                " ease-in-out border-b border-gray-100 last:border-b-0"
                            }
                            onClick={() => handleSuggestionClick(city)}
                            >
                            {city.name}, {city.country}
                        </li> 
                    ))}
                </ul>
            )}
        </div>
    )
}

export default SearchBar;