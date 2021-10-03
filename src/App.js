import React, { useState, useEffect } from "react";
import "./style.css";
import movies from "./data/movies.json";
import movieGeneres from "./data/movies.json";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import Movies from "./components/Filters/Movies";
import Filter from "./components/UI/FilterOverlay";

export default function App() {
  // State
  const [showModule, setShowModule] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const ModuleHandler = () => {
    setShowModule(true);
  };

  const onCancel = () => {
    setShowModule(false);
    setSubmit(false);
  };

  const FiltersHandler = () => {
    setSubmit(true);
  };

  const addFilters = (id, name) => {
    const values = { id: id, name: name };
    setSelectedFilters((prev) => {
      return [...prev, values];
    });
  };

  const clearFilters = () => {
    setSelectedFilters([]);
    setSubmit(false);
  };
  // An example of retrieving movie data for a single movie
  const movie = movies[0];

  const movieGenres = movies[0];

  useEffect(() => {
    // A log of movie data
    console.info("movies:", movies);
    console.info("movieGenres:", movieGenres);
  }, []);

  return (
    <div className="App">
      {showModule && (
        <Filter
          onCancel={onCancel}
          filterHandler={FiltersHandler}
          add={addFilters}
        />
      )}

      <Movies
        moduleHandler={ModuleHandler}
        submit={submit}
        filters={selectedFilters}
        clear={clearFilters}
      />
    </div>
  );
}
