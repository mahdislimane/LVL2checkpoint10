import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Link to="/profile">Go to my profile</Link>
    </div>
  );
};

const MyProfile = () => {
  return (
    <div>
      <h1>This is my profile</h1>
      <Link to="/">Go back to home</Link>
    </div>
  );
};

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/profile" exact component={MyProfile} />
        </div>
      </BrowserRouter>
    );
  }
}
