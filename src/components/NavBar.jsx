import { Link } from "react-router-dom";

export default function NavBar(){
    return (
        <nav className="bg-black text-white py-4 px-6 shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <Link to="/" className="text-red-600 font-bold text-2xl hover:text-red-500 transition duration-300">NETFLAX</Link>
                </div>
                <div className="flex space-x-8">
                    <Link to="/" className="text-gray-300 hover:text-white font-medium transition duration-300 border-b-2 border-transparent hover:border-red-600">Movies</Link>
                    <Link to="/favorites" className="text-gray-300 hover:text-white font-medium transition duration-300 border-b-2 border-transparent hover:border-red-600">Favorites</Link>
                </div>
            </div>
        </nav>
    )
}