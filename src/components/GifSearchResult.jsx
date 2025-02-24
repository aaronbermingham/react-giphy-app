import { useFetch } from "../hooks/useFetch";
import { getSearchGif } from "../api/getSearchGif";
import { useCallback } from "react";

const LIMIT = 5;

const baseStyle = {
	display: "flex",
	flexDirection: "column",
	gap: "10px",
	padding: "10px",
	alignItems: "center",
	justifyContent: "center",
};

const ulStyle = {
	display: "flex",
	flexDirection: "row",
	flexWrap: "wrap",
	listStyle: "none",
	alignItems: "center",
	justifyContent: "center",
	gap: "10px",
};

export function GifSearchResult({ query }) {
	const fetchGifs = useCallback(() => getSearchGif(query), [query]);
	const { data, isLoading, error, visible, setVisible } = useFetch(fetchGifs);
	if (isLoading) {
		return <>Loading</>;
	}

	if (error) {
		return <>Error</>;
	}

	return (
		<div style={baseStyle}>
			<h2>Search results for "{query}"</h2>
			<ul style={ulStyle}>
				{data.data.slice(0, visible).map((gif) => (
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
            <button type="button" onClick={() => setVisible(visible + LIMIT)}>
				Load more
			</button>
		</div>
	);
}
