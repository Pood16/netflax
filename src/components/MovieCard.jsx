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
            <div className="bg-[#1C1F26] rounded-lg overflow-hidden shadow-lg mb-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20 max-w-xs border border-[#2D2F36]">
                <div className="relative">
                    <img src={`https://images.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full object-cover h-64" />
                    <div className="absolute top-2 right-2">
                        <IconButton onClick={handleFavorite} aria-label="favorite" className="bg-black bg-opacity-50">
                            <FavoriteIcon sx={{ color: favorite ? '#10B981' : '#F9FAFB' }} />
                        </IconButton>
                    </div>
                </div>
                <div className="p-4 h-24 overflow-hidden">
                    <h3 className="text-xl font-semibold text-gray-50 mb-1 truncate">{movie.title}</h3>
                    <p className="text-gray-400 text-sm">{movie.release_date?.split('-')[0]}</p>
                </div>
                <hr className="border-[#2D2F36] my-2"/>
            </div>
    )
}