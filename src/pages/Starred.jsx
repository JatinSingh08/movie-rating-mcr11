import React from "react";
import { useMovies } from "../context/movie-context";
import MovieCard from "../components/Movies/MovieCard";
import StarredMoviesCard from "../components/Movies/StarredMoviesCard";

const Starred = () => {
  const {
    state: { starred },
  } = useMovies();

  return (
    <div className="px-8 py-6 ">

      <div>
        <h1 className="font-medium text-2xl text-start">{">> Starred Movies"}</h1>
      </div>
      {starred.length > 0 ? (
        <div className="grid grid-cols-3 gap-10 mt-6">
          {starred?.map((movie, idx) => {
            return <StarredMoviesCard key={idx} movie={movie} starred />;
          })}
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-medium flex items-center justify-center">
            No Starred Movies
          </h1>
        </div>
      )}
    </div>
  );
};

export default Starred;
