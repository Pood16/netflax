import MovieCard from '../components/MovieCard';
import {useMovieContext} from '../contexts/MovieContext'


export default function Favorites() {
    const { favorites } = useMovieContext();
    
    if (!favorites || favorites.length === 0) {
        return (
            <div className="container mx-auto px-4 py-16 text-center bg-[#0F1115] min-h-screen">
                <h1 className="text-3xl font-bold text-indigo-500 mb-6">My Favorites</h1>
                <div className="bg-[#1C1F26] rounded-lg p-8 shadow-lg max-w-lg mx-auto border border-[#2D2F36]">
                    <p className="text-xl text-gray-50">There are no favorites yet!</p>
                    <p className="mt-4 text-gray-400">Movies you mark as favorites will appear here</p>
                </div>
            </div>
        );
    }
    
    return (
        <div className="mt-8 p-5 bg-[#0F1115] min-h-screen">
            <h1 className="text-3xl font-bold text-indigo-500 mb-8 text-center">Favorites</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {favorites.map(movie => <MovieCard movie={movie} key={movie.id} />)}
            </div>
        </div>
    );
}