import { useState, useEffect } from "react";

export const useFetch = (apiFunc) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		let isMounted = true;

		const fetchData = async () => {
			setIsLoading(true);
			try {
				const result = await apiFunc();
				if (isMounted) setData(result);
			} catch (err) {
				if (isMounted) setError(err);
			} finally {
				if (isMounted) setIsLoading(false);
			}
		};

		fetchData();

		return () => {
			isMounted = false; 
		};
	}, [apiFunc]);

	return { data, isLoading, error};
};
