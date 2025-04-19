import './App.css'
import MovieCard from './components/MovieCard'
import NavBar from './components/NavBar'
import { MovieProvider } from './contexts/MovieContext'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'
import {Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <MovieProvider>
      <div className="min-h-screen bg-[#0F1115] flex flex-col">
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/favorites" element={<Favorites />}/>
            <Route path="/movie/:id" element={<MovieDetail />}/>
          </Routes>
        </main>
        <footer className="bg-[#0F1115] border-t border-[#2D2F36] text-gray-400 text-center py-6 mt-auto">
          <p>&copy; {new Date().getFullYear()} Netflax - All rights reserved</p>
        </footer>
      </div>
    </MovieProvider>
  )
}

