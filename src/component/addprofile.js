import React, { Component } from "react";
export default class AddProfile extends Component {
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
          placeholder="your name"
          onChange={this.handelChange}
          value={this.state.name}
        ></input>
        <h3>Image</h3>
        <input
          type="text"
          name="source"
          placeholder="URL's Image"
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
              let profile = {
                name: this.state.name,
                source: this.state.source,
                description: this.state.description
              };
              this.props.newProfile(profile);
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
