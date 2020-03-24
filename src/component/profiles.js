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
      <div
        className="container-fluid row"
        style={{ textAlign: "center", fontWeight: "bolder" }}
      >
        <div className="col-sm-4 col-12">
          <AddProfile
            newProfile={x => this.add(x)}
            save={this.save}
            erase={this.erase}
          />
        </div>
        <div className="col-sm-8 col-12">
          <div className="col-12">
            {this.state.profiles.map(x => (
              <button
                style={{ marginTop: "10px" }}
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

          <div className="col-12" style={{ textAlign: "center" }}>
            <h1>
              {!this.state.name
                ? "Add profiles and choose one"
                : this.state.name}
            </h1>
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
        </div>
      </div>
    );
  }
}
