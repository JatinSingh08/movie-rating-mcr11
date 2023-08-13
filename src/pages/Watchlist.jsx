import React from 'react'
import { useMovies } from '../context/movie-context';
import StarredMoviesCard from '../components/Movies/StarredMoviesCard';

const Watchlist = () => {
  const { state: { watchlist } } = useMovies();

  return (
    <div className="px-8 py-6 ">
      <div>
        <h1 className="font-medium text-2xl text-start">{">> Your Watchlist"}</h1>
      </div>
    {watchlist.length > 0 ? (
      <div className="grid grid-cols-3 gap-10 mt-6S">
        {watchlist?.map((movie, idx) => {
          return <StarredMoviesCard key={idx} movie={movie} starred />;
        })}
      </div>
    ) : (
      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-medium flex items-center justify-center">
          No Movies in Watchlist
        </h1>
      </div>
    )}
  </div>
  )
}

export default Watchlist
