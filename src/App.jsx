import { useEffect, useState } from "react";
import Movies from "./components/Movies";
import Filter from "./components/Filter";

function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(
      // "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
      "https://api.themoviedb.org/3/movie/popular?api_key=2d9145056774b7d98979dcc4f99b08c8"
    );
    const movies = await data.json();
    // console.log(movies);
    setPopular(movies.results);
    setFiltered(movies.results);
    {
      /* api key : 2d9145056774b7d98979dcc4f99b08c8 */
    }
    {
      /* api access token : eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDkxNDUwNTY3NzRiN2Q5ODk3OWRjYzRmOTliMDhjOCIsInN1YiI6IjY0ODA3YzMzYmYzMWYyMDEzYWRjNjI0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M-5bF7HzOl4T2dSV0GHT0aQGtVRoJs1QrIXvbaBy76U */
    }
  };
  return (
    <>
      <div className='my-24 mx-20'>
        <Filter
          popular={popular}
          setFiltered={setFiltered}
          activeGenre={activeGenre}
          setActiveGenre={setActiveGenre}
        />
        <div className=' flex flex-row flex-wrap '>
          {popular.map((movie) => {
            return <Movies key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
