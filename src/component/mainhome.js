import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default class MainHome extends Component {
  render() {
    return (
      <div
        className="container-fluid row"
        // style={{
        //     display: "flex",
        //   flexDirection: "column",
        //   justifyContent: "center"
        // }}
      >
        <div className="col-12 col-sm-4">
          <Link to="/todoapp">
            <button
              className="col-12 MyButton"
              style={{
                backgroundColor: "yellow"
              }}
            >
              {" "}
              Todo{" "}
            </button>
          </Link>
        </div>

        <div className="col-12 col-sm-4">
          <Link to="/profiles">
            <button
              className="col-12 MyButton"
              style={{
                backgroundColor: "purple"
              }}
            >
              {" "}
              Profiles{" "}
            </button>
          </Link>
        </div>

        <div className="col-12 col-sm-4">
          <Link to="/BestMovies">
            <button
              className="col-12 MyButton"
              style={{
                backgroundColor: "blue"
              }}
            >
              {" "}
              Best Movies{" "}
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
