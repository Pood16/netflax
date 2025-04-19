import { Link } from "react-router-dom";

export default function NavBar(){
    return (
        <nav className="bg-[#0F1115] text-gray-50 py-4 px-6 shadow-md border-b border-[#2D2F36]">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <Link to="/" className="text-indigo-500 font-bold text-2xl hover:text-indigo-600 transition duration-300">NETFLAX</Link>
                </div>
                <div className="flex space-x-8">
                    <Link to="/" className="text-gray-400 hover:text-gray-50 font-medium transition duration-300 border-b-2 border-transparent hover:border-indigo-500">Movies</Link>
                    <Link to="/favorites" className="text-gray-400 hover:text-gray-50 font-medium transition duration-300 border-b-2 border-transparent hover:border-indigo-500">Favorites</Link>
                </div>
            </div>
        </nav>
    )
}