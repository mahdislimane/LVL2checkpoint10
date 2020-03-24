import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  componentDidMount() {
    setTimeout(function() {
      alert("hello");
    }, 500);
    window.addEventListener("beforeunload", ev => {
      ev.preventDefault();
      return (ev.returnValue = alert("Goodbye"));
    });
  }
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to="/">
          <button> Home </button>
        </Link>
        <Link to="/todoapp">
          <button> Todo </button>
        </Link>
        <Link to="/profiles">
          <button> Profiles </button>
        </Link>
        <Link to="/BestMovies">
          <button> Best Movies </button>
        </Link>
      </div>
    );
  }
}
