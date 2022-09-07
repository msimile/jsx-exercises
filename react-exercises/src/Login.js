import React from "react";

export class Login extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };

  handleLoginInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const type = event.target.type;
    const checked = event.target.checked;
    console.log(value);

    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  render() {
    return (
      <div>
        <h1>My Login Form</h1>
        <label for="userName">Username </label>
        <input
          id="userName"
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleLoginInput}
        />
        <br />
        <br />
        <label for="passWord">Password </label>
        <input
          id="passWord"
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleLoginInput}
        />
        <br />
        <br />
        <label for="remember">Remember </label>
        <input
          id="remember"
          type="checkbox"
          name="remember"
          value={this.state.remember}
          onChange={this.handleLoginInput}
        />
      </div>
    );
  }
}
