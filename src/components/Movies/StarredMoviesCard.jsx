import React from 'react'
import { useMovies } from '../../context/movie-context';
import { ActionTypes } from '../../reducers/constants';

const StarredMoviesCard = ({ movie, starred}) => {
  const { state ,dispatch } = useMovies();
  const isStarred = state.starred.find(starredMovie => starredMovie.id === movie.id);
  const isPresentInWatchlist = state.watchlist.find(
    (toWatchMovie) => toWatchMovie.id === movie.id
  );
  const starHandler = () => {
    if (isStarred) {
      dispatch({
        type: ActionTypes.REMOVE_FROM_STARRED,
        payload: { id: movie.id },
      });
    } else {
      dispatch({ type: ActionTypes.ADD_TO_STARRED, payload: movie });
    }
  };
  const watchlistHandler = () => {
    if (isPresentInWatchlist) {
      dispatch({
        type: ActionTypes.REMOVE_FROM_WATCHLIST,
        payload: { id: movie.id },
      });
    } else {
      dispatch({ type: ActionTypes.ADD_TO_WATCHLIST, payload: movie });
    }
  };
  return (
    <div className='w-8/12 rounded-lg shadow-lg overflow-hidden'>
    <div className='relative h-48'>
      <img src={movie?.imageURL} alt={movie?.title} className='object-cover w-full h-full' />
    </div>
    <div className='p-4'>
      <h1 className='text-xl font-semibold'>{movie?.title}</h1>
      <p className='mt-2 text-gray-600'>{movie?.summary}</p>
      <div className='mt-4 flex justify-between'>
        <button className='px-4 py-2 mr-2 text-white bg-blue-500 rounded hover:bg-blue-600'
        onClick={() => starHandler()}
        >{isStarred ? "Remove from Starred" : "Star"}</button>
        <button className='px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600'
        onClick={() => watchlistHandler()}
        >{isPresentInWatchlist ? "Remove from  Watchlist" : "Add to Watchlist"}</button>
      </div>
    </div>
  </div>
  )
}

export default StarredMoviesCard
