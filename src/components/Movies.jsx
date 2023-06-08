import React from "react";
import { motion } from "framer-motion";

const Movies = ({ movie }) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className='my-4  mx-auto w-80'
    >
      <h2 className='font-bold text-slate-800 my-2 text-center'>
        {movie.title}
      </h2>
      <img
        className='rounded-lg w-full'
        src={"https://image.tmdb.org/t/p/w300" + movie.backdrop_path}
        alt=''
      />
    </motion.div>
  );
};

export default Movies;
