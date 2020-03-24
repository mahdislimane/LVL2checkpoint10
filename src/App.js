import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import TodoApp from "./component/todoapp";
import BestMovies from "./component/bestmovies";
import Home from "./component/home";
import Profiles from "./component/profiles";
import MainHome from "./component/mainhome";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Home} />
        <Route path="/" exact component={MainHome} />
        <Route path="/todoapp" exact component={TodoApp} />
        <Route path="/BestMovies" exact component={BestMovies} />
        <Route path="/profiles" exact component={Profiles} />
      </BrowserRouter>
    );
  }
}
