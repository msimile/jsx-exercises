import React from "react";

export class TodoList extends React.Component {
  state = {
    newTodo: "",
    todos: [
      "Clean the house",
      "Water the plants",
      "Do homeworks",
      "Take a break",
    ],
  };

  handleNewTodo = (event) => {
    const value = event.target.value;

    this.setState({
      newTodo: value,
    });
  };

  addTodo = () => {
    this.setState((state) => ({
      todos: [...this.state.todos, state.newTodo],
      newTodo: "",
    }));
  };

  handleResetButton = () => {
    this.setState({
      todos: [],
    });
  };

  handleRemoveButton = (event) => {
    const tasks = [...this.state.todos];
    const key = event.target.key;
    tasks.splice(key, 1);
    this.setState({
      todos: tasks,
    });
  };

  render() {
    return (
      <div>
        <h1>To Do List</h1>
        <ul>{this.props.render(this.state, this.handleRemoveButton)}</ul>
        <input
          name="newTodo"
          value={this.state.newTodo}
          onChange={this.handleNewTodo}
        ></input>
        <button onClick={this.addTodo}>Add to the list</button>
        <br />
        <br />
        <button onClick={this.handleResetButton}>Clear the list</button>
      </div>
    );
  }
}
