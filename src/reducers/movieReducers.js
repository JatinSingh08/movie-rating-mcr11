import { movies } from "../data/data";
import { ActionTypes } from "./constants";

const initialState = {
  moviesData: movies,
  starred: [],
  watchlist: [],
  filters: {
    genre: "all",
    releaseYear: "all",
    rating: "all",
    searchValue: "",
  },
};

const moviesReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.filterType]: action.payload.filterValue,
        },
      };
    case ActionTypes.ADD_TO_STARRED:
      return {
        ...state,
        starred: [...state.starred, action.payload],
      };
    case ActionTypes.ADD_TO_WATCHLIST:
      return {
        ...state,
        watchlist: [...state.watchlist, action.payload],
      };
    case ActionTypes.REMOVE_FROM_STARRED: 
      return {
        ...state,
        starred: state.starred.filter(movie => movie.id.toString() !== action.payload.id.toString())
      }
    case ActionTypes.REMOVE_FROM_WATCHLIST: 
      return {
        ...state,
        watchlist: state.watchlist.filter(movie => movie.id.toString() !== action.payload.id.toString())
      }
    default:
      return state;
  }
};
export { moviesReducer, initialState };
