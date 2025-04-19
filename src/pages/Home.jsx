import MovieCard from "../components/MovieCard";
import {useState} from 'react'
import NavBar from "../components/NavBar";

export default function Home(){
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (e) => {
      e.preventDefault();
  }
    const movies = [
        {
          id: 1,
          title: "Inception",
          release_date: "2010-07-16",
          url: "https://via.placeholder.com/150x220?text=Inception"
        },
        {
          id: 2,
          title: "The Matrix",
          release_date: "1999-03-31",
          url: "https://via.placeholder.com/150x220?text=The+Matrix"
        },
        {
          id: 3,
          title: "Interstellar",
          release_date: "2014-11-07",
          url: "https://via.placeholder.com/150x220?text=Interstellar"
        },
        {
          id: 4,
          title: "The Dark Knight",
          release_date: "2008-07-18",
          url: "https://via.placeholder.com/150x220?text=Dark+Knight"
        },
        {
          id: 5,
          title: "Fight Club",
          release_date: "1999-10-15",
          url: "https://via.placeholder.com/150x220?text=Fight+Club"
        },
        {
          id: 6,
          title: "Pulp Fiction",
          release_date: "1994-10-14",
          url: "https://via.placeholder.com/150x220?text=Pulp+Fiction"
        },
        {
          id: 7,
          title: "The Shawshank Redemption",
          release_date: "1994-09-23",
          url: "https://via.placeholder.com/150x220?text=Shawshank"
        },
        {
          id: 8,
          title: "The Godfather",
          release_date: "1972-03-24",
          url: "https://via.placeholder.com/150x220?text=Godfather"
        },
        {
          id: 9,
          title: "Gladiator",
          release_date: "2000-05-05",
          url: "https://via.placeholder.com/150x220?text=Gladiator"
        },
        {
          id: 10,
          title: "Forrest Gump",
          release_date: "1994-07-06",
          url: "https://via.placeholder.com/150x220?text=Forrest+Gump"
        }
      ];
    return (
      <div className="container mx-auto px-4 py-8">
          <form onSubmit={handleSearch} className="mb-8">
            <div className="border border-gray-700 rounded-lg overflow-hidden flex shadow-lg max-w-2xl mx-auto">
                <input 
                    type="search" 
                    className="bg-gray-800 text-white flex-1 p-4 outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Search for movies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button 
                  type="submit" 
                  className="bg-red-600 text-white px-6 py-3 font-medium hover:bg-red-700 transition duration-300"
                >
                  Search
                </button>
            </div>
        </form>
        
        <div className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {movies.map(
                    movie => movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id}/>
                )}
            </div>
        </div>
      </div>
    )
}