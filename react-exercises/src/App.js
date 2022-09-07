import React from "react";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { UncontrolledLogin } from "./UncontrolledLogin";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name="John" />
        <Counter initialValue={5} incrementAmount={5} incrementInterval={500} />
        <ClickCounter />
        <ClickTracker />
        <InteractiveWelcome/>
        <Login/>
        <UncontrolledLogin/>
      </div>
    );
  }
}
