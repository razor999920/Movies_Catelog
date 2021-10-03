import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { IoCloseSharp } from "react-icons/io5";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <React.Fragment>
      <Row className={styles.nav}>
        <Col xs="2">
          <Button onClick={props.filterHandler} className={styles.filter_btn}>
            Filter
          </Button>
        </Col>
        <Col cs="12">
          <Button onClick={props.clear} className={styles.clear_btn}>
            <IoCloseSharp
              style={{ width: "25px", color: "white" }}
              className={styles.icon}
            />{" "}
            Clear All
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          {props.submit && props.filters 
            ? props.filters.map((data, index) => {
                return (
                  <Button key={index} className={styles.filter_btns}>
                    {data.name}
                  </Button>
                );
              })
            : null}
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Navbar;
