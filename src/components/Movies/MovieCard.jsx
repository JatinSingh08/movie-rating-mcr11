import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className='w-8/12 rounded-lg shadow-lg overflow-hidden'>
      <div className='relative h-48'>
        <img src={movie?.imageURL} alt={movie?.title} className='object-cover w-full h-full' />
      </div>
      <div className='p-4'>
        <h1 className='text-xl font-semibold'>{movie?.title}</h1>
        <p className='mt-2 text-gray-600'>{movie?.summary}</p>
        <div className='mt-4 flex justify-between'>
          <button className='px-4 py-2 mr-2 text-white bg-blue-500 rounded hover:bg-blue-600'>Star</button>
          <button className='px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600'>Add to Watchlist</button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
