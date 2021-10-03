import React from "react";
import DisplayMovies from "./DisplayMovies";
import movies from "../../data/movies.json";
import MovieInfo from "../MovieInfo/MovieInfo";
import Navbar from "../UI/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import styles from "./Movies.module.css";

const Movies = (props) => {
  return (
    <React.Fragment>
      <Navbar
        filterHandler={props.moduleHandler}
        submit={props.submit}
        filters={props.filters}
        clear={props.clear}
      />
      <Row className={styles.container}>
        {props.submit && props.filters ? (
          <DisplayMovies filters={props.filters} />
        ) : (
          <>
            {movies.slice(0, 6).map((data) => {
              return (
                <Col xs="6" key={data.id} className={styles.card}>
                  <MovieInfo posterPath={data.poster_path} />
                  <Card className={styles.movie_content}>
                    <p>{data.release_date.split("-")[0]}</p>
                    <p>{data.title}</p>
                    <p>{data.overview}</p>
                  </Card>
                </Col>
              );
            })}
          </>
        )}
      </Row>
    </React.Fragment>
  );
};

export default Movies;
