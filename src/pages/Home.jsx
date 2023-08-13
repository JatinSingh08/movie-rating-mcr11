import React from "react";
import FiltersBar from "../components/Filters/FiltersBar";
import MovieCard from "../components/Movies/MovieCard";
import { useMovies } from "../context/movie-context";

const Home = () => {
  const { filteredMovies } = useMovies();

  return (
    <div className="px-8 py-6 flex-col flex gap-10">
      <FiltersBar />
      {filteredMovies.length > 0 ? (
        <div className="grid grid-cols-3 gap-10">
          {filteredMovies.map((movie) => {
            return <MovieCard movie={movie} />;
          })}
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-medium flex items-center justify-center">No movies found</h1>
        </div>
      )}
    </div>
  );
};

export default Home;
