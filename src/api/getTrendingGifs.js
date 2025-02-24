const API_KEY = import.meta.env.VITE_API_KEY

export const getTrendingGifs = async () => {
    const response = await fetch(
        `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`,
    );
    if (!response.ok) {
        throw new Error('Failed to fetch posts');
    }
    return response.json();
};