import React from "react";
import movies from "../../data/movies.json";
import MovieInfo from "../MovieInfo/MovieInfo";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { Col } from "react-bootstrap";
import styles from "./DisplayMovies.module.css";

const DisplayMovies = (props) => {
  const selectedMovies = (movie) => {
    {
      return props.filters.map((data) => {
        {
          return movie.genre_ids.some((id) => id == data.id) ? (
            <Col xs="6" key={movie.id} className={styles.card}>
              <MovieInfo posterPath={movie.poster_path} />
              <Card className={styles.movie_content}>
                <p>{movie.release_date.split("-")[0]}</p>
                <p>{movie.title}</p>
                <p>{movie.overview}</p>
              </Card>
            </Col>
          ) : (
            <></>
          );
        }
      });
    }
  };

  return (
    <React.Fragment>
      {movies.map((movie) => {
        {
          return <>{selectedMovies(movie)}</>;
        }
      })}
    </React.Fragment>
  );
};

export default DisplayMovies;
