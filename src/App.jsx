import './App.css'
import MovieCard from './components/MovieCard'
import NavBar from './components/NavBar'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/favorites" element={<Favorites />}/>
        </Routes>
      </main>
      <footer className="bg-black text-gray-500 text-center py-6 mt-auto">
        <p>&copy; {new Date().getFullYear()} Netflax - All rights reserved</p>
      </footer>
    </div>
  )
}

