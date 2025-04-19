import {useState} from 'react'

export default function SearchBar(){
    const [searchQuery, setSearchQuery] = useState('xbvx');
    const handleSearch = (e) => {
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSearch} className="mb-6 w-full max-w-2xl mx-auto">
            <div className="flex rounded-lg overflow-hidden border-2 border-[#2D2F36] focus-within:border-indigo-500 transition duration-300">
                <input 
                    type="search" 
                    className="flex-1 bg-[#1C1F26] text-gray-50 px-4 py-3 outline-none placeholder-gray-400"
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
    )
}