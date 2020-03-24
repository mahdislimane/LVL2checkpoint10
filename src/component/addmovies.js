import React, { Component } from "react";
export default class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      source: "",
      description: ""
    };
  }
  handelChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render(props) {
    return (
      <div>
        <h3>Name</h3>
        <input
          type="text"
          name="name"
          placeholder="Movie's name"
          onChange={this.handelChange}
          value={this.state.name}
        ></input>
        <h3>Link</h3>
        <input
          type="text"
          name="source"
          placeholder="Link"
          onChange={this.handelChange}
          value={this.state.source}
        ></input>
        <h3>description</h3>
        <input
          type="text"
          name="description"
          placeholder="describe yourself..."
          onChange={this.handelChange}
          value={this.state.description}
        ></input>
        <div>
          <button
            className="col-12"
            onClick={() => {
              let movie = {
                name: this.state.name,
                source: this.state.source,
                description: this.state.description
              };
              this.props.newmovie(movie);
              this.setState({ name: "", source: "", description: "" });
            }}
          >
            Add
          </button>
          <button className="col-6" onClick={this.props.save}>
            Save
          </button>
          <button className="col-6" onClick={this.props.erase}>
            Erase
          </button>
        </div>
      </div>
    );
  }
}
