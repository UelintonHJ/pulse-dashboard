import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import api from "../../services/api";

export default function Search() {
    const [searchParams] = useSearchParams();
    const [results, setResults] = useState([]);

    const query = searchParams.get("q");

    useEffect(() => {
        async function fetchData() {
            try {
                const reponse = await api.get(`/search?q=${query}`);
                setResults(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        if (query) {
            fetchData();
        }
    }, [query]);

    return (
        <div className="pt-32 px-8">
            <h1 className="text-4xl font-bold text-cyan-400 mb-8">
                Results for "{query}"
            </h1>

            <pre>
                {JSON.stringify(results, null, 2)}
            </pre>
        </div>
    )
}