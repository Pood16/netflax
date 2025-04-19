import { Link } from "react-router-dom";

export default function NavBar(){
    return (
        <nav className="bg-indigo-950 text-white py-4 px-6 shadow-md border-b border-indigo-700">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <Link to="/" className="text-emerald-400 font-bold text-2xl hover:text-emerald-300 transition duration-300">NETFLAX</Link>
                </div>
                <div className="flex space-x-8">
                    <Link to="/" className="text-violet-300 hover:text-emerald-300 font-medium transition duration-300 border-b-2 border-transparent hover:border-emerald-400">Movies</Link>
                    <Link to="/favorites" className="text-violet-300 hover:text-emerald-300 font-medium transition duration-300 border-b-2 border-transparent hover:border-emerald-400">Favorites</Link>
                </div>
            </div>
        </nav>
    )
}