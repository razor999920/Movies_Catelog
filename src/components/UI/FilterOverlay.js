import React, { useState } from "react";
import ReactDOM from "react-dom";
import genres from "../../data/movie-genres.json";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import styles from "./FilterOverlay.module.css";

const Features = (props) => {
  // const [clickedCss, setClickedCss] = useState("transparent");

  const FiltersHandler = (event) => {

    const values = {id: event.target.value, name: event.target.name}
    props.add(event.target.value, event.target.name)
  };

  const SubmitFilters = () => {
    props.onCancel()
    props.filterHandler()
  }

  const Backdrop = () => {
    return <div className={styles.backdrop} onClick={props.onCancel} />;
  };

  const ModalOverlay = () => {
    return (
      <React.Fragment>
        <style type="text/css">
          {`
    .btn-genre {
      border-color: white;
      color: white;
      background-color: transparent;
      width: 20%;
      margin: 0px auto;
      margin: 30px 40px 0px 55px;
    }

    .btn:hover {
      background-color: #e800b2;
      color: white;
    }

    `}
        </style>
        <div className={styles.modal}>
          {genres.map((genre, index) => {
            return (
              <Button
                key={genre.id}
                name={genre.name}
                value={genre.id}
                variant="genre"
                onClick={FiltersHandler}
              >
                {genre.name}
              </Button>
            );
          })}

          <Button
            type="submit"
            className={styles.apply_button}
            onClick={SubmitFilters}
          >
            Apply
          </Button>
        </div>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCancel={props.onCancel} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onCancel={props.onCancel}
          // filterHandler={props.filterHandler}
        />,
        document.getElementById("filterOverlay-root")
      )}
    </React.Fragment>
  );
};

export default Features;
