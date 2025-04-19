import { useMovieContext } from "../contexts/MovieContext";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function MovieCard({movie}){
    const {addToFavoriteList, removeFromFavoritesList, isFavorite } = useMovieContext()
    const favorite = isFavorite(movie.id)

    const handleFavorite = (e) => {
        e.preventDefault()
        if (favorite) removeFromFavoritesList(movie.id)
        else addToFavoriteList(movie)
    }
    return (
            <div className="bg-indigo-900 rounded-lg overflow-hidden shadow-lg mb-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl max-w-xs border border-indigo-700">
                <div className="relative">
                    <img src={`https://images.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full object-cover h-64" />
                    <div className="absolute top-2 right-2">
                        <IconButton onClick={handleFavorite} aria-label="favorite" className="bg-black bg-opacity-50">
                            <FavoriteIcon sx={{ color: favorite ? '#10B981' : 'white' }} />
                        </IconButton>
                    </div>
                </div>
                <div className="p-4 h-24 overflow-hidden">
                    <h3 className="text-xl font-semibold text-emerald-300 mb-1 truncate">{movie.title}</h3>
                    <p className="text-violet-300 text-sm">{movie.release_date?.split('-')[0]}</p>
                </div>
            </div>
    )
}