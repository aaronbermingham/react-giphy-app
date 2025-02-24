const API_KEY = import.meta.env.VITE_API_KEY;

export const getSearchGif = async (query) => {
	const response = await fetch(
		`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}`,
	);
	if (!response.ok) {
		throw new Error("Failed to fetch posts");
	}
	return response.json();
};
