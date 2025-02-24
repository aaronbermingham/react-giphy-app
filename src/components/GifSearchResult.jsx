import { useFetch } from "../hooks/useFetch";
import { getSearchGif } from "../api/getSearchGif";
import { useCallback } from "react";

export function GifSearchResult({ query }) {
	const fetchGifs = useCallback(() => getSearchGif(query), [query]);
	const { data, isLoading, error } = useFetch(fetchGifs);
	if (isLoading) {
		return <>Loading</>;
	}

	if (error) {
		return <>Error</>;
	}

	return (
		<div>
			<h2>Search results for "{query}"</h2>
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
	);
}
