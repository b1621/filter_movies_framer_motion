import { useEffect } from "react";

const Filter = ({ setActiveGenre, activeGenre, setFiltered, popular }) => {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);
  }, [activeGenre]);
  const buttonStyle =
    "border rounded-2xl px-6 py-1 border-blue-950 hover:bg-blue-900 hover:text-white mx-5";
  return (
    <div className='mx-auto w-fit'>
      <button onClick={() => setActiveGenre(0)} className={buttonStyle}>
        All
      </button>
      <button onClick={() => setActiveGenre(35)} className={buttonStyle}>
        Comedy
      </button>
      <button onClick={() => setActiveGenre(28)} className={buttonStyle}>
        Action
      </button>
    </div>
  );
};

export default Filter;
