import './App.css'
import MovieCard from './components/MovieCard'
import NavBar from './components/NavBar'
import { MovieProvider } from './contexts/MovieContext'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <MovieProvider>
      <div className="min-h-screen bg-indigo-950 flex flex-col">
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/favorites" element={<Favorites />}/>
          </Routes>
        </main>
        <footer className="bg-indigo-950 border-t border-indigo-800 text-violet-400 text-center py-6 mt-auto">
          <p>&copy; {new Date().getFullYear()} Netflax - All rights reserved</p>
        </footer>
      </div>
    </MovieProvider>
  )
}

