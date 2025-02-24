import { useCallback } from "react";
import { getTrendingGifs } from "../api/getTrendingGifs";
import { useFetch } from "../hooks/useFetch";

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
        <div style={baseStyle}>
            <h2>Trending GIFs</h2>
            <ul style={ulStyle}>
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