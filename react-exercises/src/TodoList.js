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
    }));
  };

  render() {
    return (
      <div>
        <h1>To Do List</h1>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
        <input
          name="newTodo"
          value={this.state.newTodo}
          onChange={this.handleNewTodo}
        ></input>
        <button onClick={this.addTodo}>Add To The List</button>
      </div>
    );
  }
}
