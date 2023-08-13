import React from 'react'
import { Link } from 'react-router-dom'
import { useMovies } from '../../context/movie-context'
import { ActionTypes } from '../../reducers/constants';

const Header = () => {
  const { state, dispatch } = useMovies();
  const changeFiltersHandler = (e) => {
    const filterType = e.target.name;
    const filterValue = e.target.value;
    dispatch({
      type: ActionTypes.CHANGE_FILTER,
      payload: { filterType, filterValue },
    });
  };

  return (
    <div className='bg-gray-600 flex px-8 py-4 justify-between items-center'>
      <div className='text-white text-2xl font-bold'>
        <h1>IMDB</h1>
      </div>
      <div>
        <input type="text" placeholder='Search movies by title, cast & director' className='w-96 px-4 py-2 rounded-md'
        value={state.filters.searchValue}
        name='searchValue'
        onChange={changeFiltersHandler}
        />
      </div>
      <div className='flex gap-6 text-white'>
        <div>
          <Link to='/'>Movies</Link>
        </div>
        <div>
          <Link to='/watchlist'>Watch List</Link>
        </div>
        <div>
          <Link to='/starred'>Starred Movies</Link>
        </div>
      </div>
    </div>
  )
}

export default Header
