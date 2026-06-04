import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    function handleSearch(e) {
        e.preventDefault();

        if (!query.trim()) return;

        navigate(`/search?q=${query}`);
    }

    return (
        <form
            onSubmit={handleSearch}
            className="flex items-center"
        >
            <input 
                type="text"
                placeholder="Search news, jobs or technologies..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="
                    px-4 py-2
                    rounded-xl
                    bg-white/10
                    border border-white/20
                    backdrop-blur-lg
                    outline-none
                "
            />
        </form>
    )
}

export default SearchBar;