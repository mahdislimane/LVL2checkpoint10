import React, { Component } from "react";
import ToDo from "./todo";
export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      todo: ""
    };
  }
  componentDidMount = () => {
    let savedData = JSON.parse(localStorage.getItem("todo"));
    savedData &&
      this.setState({ todoList: this.state.todoList.concat(savedData) });
  };
  handelChange = e => {
    this.setState({ todo: e.target.value });
  };
  addTodo = () => {
    this.state.todo
      ? this.setState({
          todoList: this.state.todoList.concat({
            todo: this.state.todo
          }),
          todo: ""
        })
      : window.confirm("please insert a todo");
  };
  save = () => {
    localStorage.setItem("todo", JSON.stringify(this.state.todoList));
    alert("Tado saved");
  };
  erase = () => {
    localStorage.removeItem("todo");
    alert("Tado erased");
  };
  render(props) {
    return (
      <div className="container-fluid row">
        <div className="col-12 col-md-6">
          <h1>Add your Todo</h1>
          <input
            className="col-5"
            name="todo"
            onChange={this.handelChange}
            value={this.state.todo}
          ></input>
          <button className="col-3" onClick={this.addTodo}>
            ADD
          </button>
          <button className="col-2" onClick={this.save}>
            Save
          </button>
          <button className="col-2" onClick={this.erase}>
            Erase
          </button>
        </div>
        <div className="col-12 col-md-6">
          <h3>Click for check</h3>
          <ToDo todolist={this.state.todoList} />
        </div>
      </div>
    );
  }
}
