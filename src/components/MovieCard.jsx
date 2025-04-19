export default function MovieCard({movie}){

    function handleFavorite(){
        alert("added to favorit");
    }
    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg mb-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="relative">
                <img src={movie.url} alt={movie.title} className="w-full object-cover" />
                <div className="absolute top-2 right-2">
                    <button 
                        onClick={handleFavorite}
                        className="bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition duration-300"
                    >
                        ❤️
                    </button>
                </div>
            </div>
            <div className="p-4">
                <h3 className="text-xl font-semibold text-white mb-1">{movie.title}</h3>
                <p className="text-gray-400 text-sm">{movie.release_date}</p>
            </div>
            <hr className="border-gray-700 my-2"/>
        </div>
    )
}