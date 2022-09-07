import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component {
  state = {
    name: "",
  };

  handleInput = (event) => {
    const name = event.target.value;

    this.setState({
      name: name,
    });
  };

  render() {
    return (
        <div>
            <h1>Interactive Welcome</h1>
            <label for="WelcomeUser">Inserisci il nome utente: </label>
            <input id="WelcomeUser" type="text" name="WelcomeUser" value={this.state.name} onChange={this.handleInput}/>
            <Welcome name={this.state.name}/>
        </div>
    )
  }
}
