export const filtersHandler = (state) => {
  const {
    moviesData,
    filters: { genre, releaseYear, rating, searchValue },
  } = state;
  let newData = moviesData;
  newData =
    genre === "all"
      ? newData
      : newData.filter((movie) => movie.genre.includes(genre));

  newData =
    releaseYear === "all"
      ? newData
      : newData.filter(
          (movie) => movie.year.toString() === releaseYear.toString()
        );

  newData =
    rating === "all"
      ? newData
      : newData.filter((movie) => movie.rating === parseFloat(rating));
  newData =
    searchValue.length > 0
      ? newData.filter(
          (movie) =>
            movie.title.toLowerCase().includes(searchValue.toLowerCase()) ||
            movie.director.toLowerCase().includes(searchValue.toLowerCase())
        )
      : newData;
  return newData;
};
