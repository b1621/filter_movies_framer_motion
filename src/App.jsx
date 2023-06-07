import { useEffect, useState } from "react";
import Movies from "./components/Movies";

function App() {
  const [popular, setPopular] = useState([]);

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
    {
      /* api key : 2d9145056774b7d98979dcc4f99b08c8 */
    }
    {
      /* api access token : eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDkxNDUwNTY3NzRiN2Q5ODk3OWRjYzRmOTliMDhjOCIsInN1YiI6IjY0ODA3YzMzYmYzMWYyMDEzYWRjNjI0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M-5bF7HzOl4T2dSV0GHT0aQGtVRoJs1QrIXvbaBy76U */
    }
  };
  return (
    <>
      <div>
        <div className='my-24 flex flex-row flex-wrap mx-20'>
          {popular.map((movie) => {
            return <Movies key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
