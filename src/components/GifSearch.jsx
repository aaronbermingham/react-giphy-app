import React, { useState } from "react";
import { GifSearchResult } from "./GifSearchResult";


export const GifSearch = ({ onSearch }) => {
	const [query, setQuery] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		const inputValue = e.target.elements.gifSearch.value;
		setQuery(inputValue);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input type="text" name="gifSearch" placeholder="Search for gifs" />
				<button type="submit">Search</button>
			</form>
			{query && <GifSearchResult query={query} />}
		</>
	);
};
