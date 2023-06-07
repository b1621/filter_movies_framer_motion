import React from "react";

const Movies = ({ movie }) => {
  return (
    <div className='my-4  mx-auto w-80'>
      <h2 className='font-bold text-slate-800 my-2 text-center'>
        {movie.title}
      </h2>
      <img
        className='rounded-lg w-full'
        src={"https://image.tmdb.org/t/p/w300" + movie.backdrop_path}
        alt=''
      />
    </div>
  );
};

export default Movies;
