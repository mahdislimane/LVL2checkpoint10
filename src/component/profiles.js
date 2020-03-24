import React, { Component } from "react";
import AddProfile from "./addprofile";

export default class Profiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
      name: "",
      source: "",
      description: ""
    };
  }
  componentDidMount = () => {
    let savedData = JSON.parse(localStorage.getItem("profiles"));
    savedData &&
      this.setState({ profiles: this.state.profiles.concat(savedData) });
  };
  save = () => {
    localStorage.setItem("profiles", JSON.stringify(this.state.profiles));
    alert("Profiles saved");
  };
  erase = () => {
    localStorage.removeItem("profiles");
    alert("profiles erased");
  };
  add = newprofile => {
    (newprofile.name, newprofile.description, newprofile.source)
      ? this.setState({ profiles: this.state.profiles.concat(newprofile) })
      : alert("veuillez remplir toutes les cases");
  };
  render(props) {
    return (
      <div className="container-fluid row" style={{ textAlign: "center" }}>
        <div className="col-sm-4 col-12">
          <AddProfile
            newProfile={x => this.add(x)}
            save={this.save}
            erase={this.erase}
          />
        </div>
        <div className="col-sm-8 col-12">
          <div className="col-lg-4 col-0"></div>
          <div className="col-lg-4 col-12">
            {this.state.profiles.map(x => (
              <button
                onClick={() =>
                  this.setState({
                    name: x.name,
                    source: x.source,
                    description: x.description
                  })
                }
              >
                {x.name}
              </button>
            ))}
          </div>
          <div className="col-lg-4 col-0"></div>
          <div className="col-lg-4 col-0"></div>
          <div className="col-lg-4 col-12" style={{ textAlign: "center" }}>
            <h1>{!this.state.name ? "Choose One" : this.state.name}</h1>
            <img
              style={{ height: 200 }}
              src={
                !this.state.source
                  ? "https://www.docplanner.com/img/logo.png"
                  : this.state.source
              }
              alt=""
            />
            <p className="col-12">{this.state.description}</p>
          </div>
          <div className="col-lg-4 col-0"></div>
        </div>
      </div>
    );
  }
}
