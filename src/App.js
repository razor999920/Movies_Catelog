import React, {useEffect} from 'react';
import './style.css';
import movies from './data/movies.json'
import movieGeneres from './data/movies.json'
import MovieInfo from "./components/MovieInfo/MovieInfo";

export default function App() {

  // An example of retrieving movie data for a single movie
  const movie = movies[0];

  const movieGenres = movies[0];

  useEffect(() => {
    // A log of movie data
    console.info('movies:', movies);
    console.info('movieGenres:', movieGenres);
  }, []);

  return (
    <div className="App">
      <MovieInfo posterPath={movie.poster_path} />
    </div>
  );
}
