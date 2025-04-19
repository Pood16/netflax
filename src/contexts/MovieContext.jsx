import {createContext, useContext, useState, useEffect} from 'react'

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({children}) => {

    const [favorites, setFavorites] = useState([]);
    // check for favorite movies
    useEffect(()=>{
        const storedFavorites = localStorage.getItem('favorites-movies')
        if (storedFavorites) setFavorites(JSON.parse(storedFavorites))
    }, [])
    // update favorite movies list
    useEffect(()=>{
        localStorage.setItem('favorites-movies', JSON.stringify(favorites))
    }, [favorites])
    // add movie to favorite list
    const addToFavoriteList = (movie) =>{
        setFavorites(prev => [...prev, movie])
    }
    // remove movie from favorite list
    const removeFromFavoritesList = (movieId) => {
        setFavorites(prev => prev.filter(movie=> movie.id !== movieId))
    }
    // check if the movie is in favorite list
    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const value = {
        favorites, 
        addToFavoriteList, 
        removeFromFavoritesList,
        isFavorite
    }

        return (
            <MovieContext.Provider value={value}>
                {children}
            </MovieContext.Provider>
        )
}