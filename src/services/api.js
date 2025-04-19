const API_KEY = "e991e9fb8ad1d1b1189d413e08d36c99";
const BASE_URL = "https://api.themoviedb.org/3"



// fetch all popular movies
export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    console.log(data.results)
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