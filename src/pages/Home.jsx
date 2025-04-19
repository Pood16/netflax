import MovieCard from "../components/MovieCard";
import {useState, useEffect} from 'react'
import NavBar from "../components/NavBar";
import { getPopularMovies, searchedMovies } from "../services/api";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function Home(){
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const loadPopularMovies = async () => {
      try{
          const popularMovies = await getPopularMovies()
          setMovies(popularMovies)
          setError(null)
        }catch(err){
          console.log('Failled to load popular movies '. err)
          setError('Failled to load movies')
        }finally{
          setLoading(false)
        }
    }
    loadPopularMovies();
  }, [])

  const handleSearch = async (e) => {
      e.preventDefault();
      if (!searchQuery.trim()) return;
      if (loading) return;
      setLoading(true);
      try{
        const searchedResults = await searchedMovies(searchQuery);
        setMovies(searchedResults)
        setError(false)
      }catch (err){
        console.log('search error : '. err)
        setError('Failed to load searched movies')
      }finally{
        setLoading(false);
      }
  }

    return (
      <div className="container mx-auto px-4 py-8 bg-[#0F1115] min-h-screen">
          <form onSubmit={handleSearch} className="mb-8">
            <div className="border border-[#2D2F36] rounded-lg overflow-hidden flex shadow-lg max-w-2xl mx-auto">
                <input 
                    type="search" 
                    className="bg-[#1C1F26] text-gray-50 flex-1 p-4 outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Search for movies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button 
                  type="submit" 
                  className="bg-gradient-to-r from-indigo-500 to-emerald-500 text-gray-50 px-6 py-3 font-medium hover:from-indigo-600 hover:to-emerald-600 transition duration-300"
                >
                  Search
                </button>
            </div>
        </form>

        {error && <Error error={error} />}

        {loading ? 
          <div className="flex justify-center items-center">
            <Loading />
          </div> : (
            <div className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {movies.map(
                      movie => <MovieCard movie={movie} key={movie.id}/>
                  )}
              </div>
            </div>
          )
        }
      </div>
    )
}