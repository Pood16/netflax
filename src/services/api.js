const API_KEY = import.meta.env.REACT_APP_API_KEY
const BASE_URL = import.meta.env.REACT_APP_BASE_URL

// fetch all popular movies
export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}


// fetch searched movies
export const searchedMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
}

// fetch movie details by ID
export const getMovieDetails = async (id) => {
    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=credits,videos,images`);
    const data = await response.json();
    return data;
}