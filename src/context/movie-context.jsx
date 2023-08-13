import React, { createContext, useContext, useReducer } from 'react'
import { initialState, moviesReducer } from '../reducers/movieReducers';
import { filtersHandler } from '../utils/filtersFunction';

const MovieContext = createContext();
const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(moviesReducer, initialState);


  const filteredMovies = filtersHandler(state);
  console.log('starred' ,state.starred)
  return (
    <MovieContext.Provider
    value={{
      state,
      dispatch,
      filteredMovies
    }}
    >
      {children}
    </MovieContext.Provider>
  )
}

const useMovies = () => useContext(MovieContext);
export { useMovies, MovieProvider}
