import { useCallback } from "react";
import { getTrendingGifs } from "../api/getTrendingGifs";
import { useFetch } from "../hooks/useFetch";


export function TrendingList() {
    const fetchTrendingGifs = useCallback(getTrendingGifs, []);
    const { data, isLoading, error } = useFetch(fetchTrendingGifs);

    if (isLoading) {
		return <>Loading</>;
	}

	if (error) {
		return <>Error</>;
	}

    return(
        <div>
            <h2>Trending GIFs</h2>
            <ul>
                {data.data.map((gif) => (
                    <li>
                        <img
                            src={gif.images.original.url}
                            alt={gif.title}
                            width={"200px"}
                            height={"200px"}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}