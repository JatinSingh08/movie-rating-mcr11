import { movies } from "../data/data";
import { ActionTypes } from "./constants";

const initialState = {
  moviesData: movies,
  filters: {
    genre: 'all',
    releaseYear: 'all',
    rating: 'all',
    searchValue: ''
  }
}

const moviesReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.filterType]: action.payload.filterValue
        }
      }
  
    default:
      return state;
  }
}
export { moviesReducer, initialState }