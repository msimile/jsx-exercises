import React, { createRef } from "react";

export class UncontrolledLogin extends React.Component {
  _formRef = createRef();

  handleFormSubmit = (event) => {
    event.preventDeafault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.checked;
  };

  render() {
    return (
      <div>
        <h1>My Uncontrolled Login Form</h1>
        <form ref={this._formRef} onSubmit={this.handleFormSubmit}>
          <label for="userName">Username </label>
          <input name="username" type="text" />
          <br />
          <br />
          <label for="passWord">Password </label>
          <input name="password" type="password" />
          <br />
          <br />
          <label for="remember">Remember </label>
          <input name="remember" type="checkbox" />
          <br />
          <br />
          <button name="button" type="submit">
            Login
          </button>
          <br />
          <br />
          <button name="reset" type="reset">Reset Form</button>
        </form>
      </div>
    );
  }
}
