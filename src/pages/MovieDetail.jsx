
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../services/api';
import { useMovieContext } from '../contexts/MovieContext';
import Loading from '../components/Loading';
import Error from '../components/Error';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';

export default function MovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { addToFavoriteList, removeFromFavoritesList, isFavorite } = useMovieContext();

    useEffect(() => {
        const fetchMovieDetails = async () => {
            setLoading(true);
            try {
                const details = await getMovieDetails(id);
                setMovie(details);
                setError(null);
            } catch (err) {
                console.error('Failed to load movie details:', err);
                setError('Failed to load movie details. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchMovieDetails();
    }, [id]);

    const handleFavorite = () => {
        if (isFavorite(movie.id)) {
            removeFromFavoritesList(movie.id);
        } else {
            addToFavoriteList(movie);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-[#0F1115]">
                <Loading />
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mx-auto px-4 py-8 bg-[#0F1115] min-h-screen">
                <Error error={error} />
            </div>
        );
    }

    if (!movie) return null;

    // Format date
    const releaseDate = movie.release_date ? new Date(movie.release_date).toLocaleDateString() : 'Unknown';
    
    // Get director
    const director = movie.credits?.crew?.find(person => person.job === 'Director')?.name || 'Unknown';
    
    // Get top cast 
    const topCast = movie.credits?.cast?.slice(0, 6) || [];

    return (
        <div className="container mx-auto px-4 py-8 bg-[#0F1115] min-h-screen">
            <div className="bg-[#1C1F26] rounded-lg overflow-hidden shadow-xl border border-[#2D2F36] mb-8">
                {/* Backdrop image header */}
                <div className="relative h-80 w-full">
                    <img 
                        src={`https://images.tmdb.org/t/p/w1280${movie.backdrop_path || movie.poster_path}`} 
                        alt={movie.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1F26] to-transparent"></div>
                </div>
                
                <div className="p-8 relative -mt-20">
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Movie poster */}
                        <div className="w-60 flex-shrink-0 mx-auto md:mx-0">
                            <div className="rounded-lg overflow-hidden shadow-lg border border-[#2D2F36]">
                                <img 
                                    src={`https://images.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    className="w-full h-auto"
                                    onError={(e) => { 
                                        e.target.onerror = null; 
                                        e.target.src = 'https://via.placeholder.com/400x600?text=No+Image' 
                                    }}
                                />
                            </div>
                        </div>
                        
                        {/* Movie details */}
                        <div className="flex-grow">
                            <div className="flex justify-between items-start">
                                <h1 className="text-3xl font-bold text-gray-50 mb-2">{movie.title}</h1>
                                <IconButton 
                                    onClick={handleFavorite}
                                    aria-label="favorite"
                                    className="bg-[#2D2F36] h-12 w-12"
                                >
                                    <FavoriteIcon sx={{ color: isFavorite(movie.id) ? '#10B981' : '#F9FAFB', fontSize: 28 }} />
                                </IconButton>
                            </div>
                            
                            {movie.tagline && (
                                <p className="text-emerald-500 text-lg italic mb-4">{movie.tagline}</p>
                            )}
                            
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex items-center">
                                    <StarIcon sx={{ color: '#FBBF24' }} />
                                    <span className="ml-1 text-gray-50 font-medium">{movie.vote_average.toFixed(1)}</span>
                                </div>
                                <span className="text-gray-400">|</span>
                                <span className="text-gray-400">{movie.runtime} min</span>
                                <span className="text-gray-400">|</span>
                                <span className="text-gray-400">{releaseDate}</span>
                            </div>
                            
                            <div className="mb-6">
                                <h2 className="text-xl font-semibold text-indigo-500 mb-2">Overview</h2>
                                <p className="text-gray-300">{movie.overview}</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-indigo-500 mb-2">Director</h3>
                                    <p className="text-gray-300">{director}</p>
                                </div>
                                
                                <div>
                                    <h3 className="text-lg font-semibold text-indigo-500 mb-2">Genres</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {movie.genres.map(genre => (
                                            <span 
                                                key={genre.id}
                                                className="px-3 py-1 bg-[#2D2F36] text-gray-300 rounded-full text-sm"
                                            >
                                                {genre.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Cast section */}
                    {topCast.length > 0 && (
                        <div className="mt-12">
                            <h3 className="text-xl font-semibold text-indigo-500 mb-4">Top Cast</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                                {topCast.map(actor => (
                                    <div key={actor.id} className="text-center">
                                        <div className="w-full aspect-square overflow-hidden rounded-lg mb-2">
                                            <img 
                                                src={actor.profile_path 
                                                    ? `https://images.tmdb.org/t/p/w185${actor.profile_path}`
                                                    : 'https://via.placeholder.com/185x185?text=No+Image'
                                                }
                                                alt={actor.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <p className="text-gray-50 font-medium text-sm truncate">{actor.name}</p>
                                        <p className="text-gray-400 text-xs truncate">{actor.character}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}