import React, { Component } from "react";
export default class ToDo extends Component {
  constructor(props) {
    super(props);
  }
  handelEtat = e => {
    e.target.style.textDecoration = "line-through";
    e.target.style.backgroundColor = "grey";
    e.target.style.textDecorationColor = "red";
    e.target.style.textDecorationStyle = "wavy";
  };
  render(props) {
    return (
      <div>
        {this.props.todolist.map(x => (
          <div
            style={{
              cursor: "pointer",
              userSelect: "none",
              border: "solid rgb(54, 54, 54) 2px",
              textAlign: "center",
              fontWeight: "bolder",
              color: "white",
              backgroundColor: "rgb(54, 54, 54)"
            }}
            onClick={this.handelEtat}
          >
            {x.todo}
          </div>
        ))}
      </div>
    );
  }
}
