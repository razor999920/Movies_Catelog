import React from 'react';
import './MovieInfo.scss';
import getMoviePosterURL from "../../utils/get-movie-poster-url";

const defaultProps = {};

const MovieInfo = (props) => {
  const {posterPath} = props;

  // An example
  const posterURL = getMoviePosterURL(posterPath)

  return (
    <div className="MovieInfo">
      <img src={posterURL} />
    </div>
  );
};

MovieInfo.defaultProps = defaultProps;

export default MovieInfo;
