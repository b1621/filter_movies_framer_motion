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
      <button
        onClick={() => setActiveGenre(0)}
        className={`  ${buttonStyle} ${
          activeGenre === 0 ? "bg-blue-900 text-white " : ""
        }`}
      >
        All
      </button>
      <button
        onClick={() => setActiveGenre(35)}
        className={`  ${buttonStyle} ${
          activeGenre === 35 ? "bg-blue-900 text-white " : ""
        }`}
      >
        Comedy
      </button>
      <button
        onClick={() => setActiveGenre(28)}
        className={`  ${buttonStyle} ${
          activeGenre === 28 ? "bg-blue-900 text-white " : ""
        }`}
      >
        Action
      </button>
      <button
        onClick={() => setActiveGenre(16)}
        className={`  ${buttonStyle} ${
          activeGenre === 16 ? "bg-blue-900 text-white " : ""
        }`}
      >
        Animation
      </button>
      <button
        onClick={() => setActiveGenre(80)}
        className={`  ${buttonStyle} ${
          activeGenre === 80 ? "bg-blue-900 text-white " : ""
        }`}
      >
        Crime
      </button>
    </div>
  );
};

export default Filter;
