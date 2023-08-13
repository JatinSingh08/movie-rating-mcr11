import React from "react";
import { movies } from "../../data/data";
import { useMovies } from "../../context/movie-context";
import { ActionTypes } from "../../reducers/constants";

const FiltersBar = () => {
  const genres = [...new Set(movies.map((movie) => movie.genre).flat())];
  const releaseYears = [...new Set(movies.map((movie) => movie.year))];
  const ratings = [...new Set(movies.map((movie) => movie.rating))];
  const { state, dispatch } = useMovies();
  const changeFiltersHandler = (e) => {
    const filterType = e.target.name;
    const filterValue = e.target.value;
    dispatch({
      type: ActionTypes.CHANGE_FILTER,
      payload: { filterType, filterValue },
    });
  };

  console.log({ genres });
  return (
    <div className="flex items-center justify-between px-10 border py-4">
      <div>
        <h1 className="text-2xl font-medium">Movies</h1>
      </div>
      <div>
        <select
          name="genre"
          className="bg-gray-200 px-4 py-1 outline-none rounded-lg"
          value={state.filters.genre}
          onChange={changeFiltersHandler}
        >
          <option value="all">All</option>
          {genres?.map((genre, idx) => {
            return (
              <option value={genre} key={idx}>
                {genre}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <select
          name="releaseYear"
          className="bg-gray-200 px-4 py-1 outline-none rounded-lg"
          value={state.filters.releaseYear}
          onChange={changeFiltersHandler}
        >
          <option selected disabled>Release Year</option>
          <option value='all' >
            All
          </option>
          {releaseYears?.map((year, idx) => {
            return (
              <option value={year} key={idx}>
                {year}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <select
          name="rating"
          className="bg-gray-200 px-4 py-1 outline-none rounded-lg"
          value={state.filters.rating}
          onChange={changeFiltersHandler}
        >
          <option selected disabled>Rating</option>
          <option value='all'>
            All
          </option>
          {ratings?.map((rating, idx) => {
            return (
              <option value={rating} key={idx}>
                {rating}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Add a Movie
        </button>
      </div>
    </div>
  );
};

export default FiltersBar;
