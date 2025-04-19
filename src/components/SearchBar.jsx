import {useState} from 'react'

export default function SearchBar(){
    const [searchQuery, setSearchQuery] = useState('xbvx');
    const handleSearch = (e) => {
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSearch} className="mb-6 w-full max-w-2xl mx-auto">
            <div className="flex rounded-lg overflow-hidden border-2 border-gray-700 focus-within:border-red-600 transition duration-300">
                <input 
                    type="search" 
                    className="flex-1 bg-gray-800 text-white px-4 py-3 outline-none placeholder-gray-500"
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
    )
}