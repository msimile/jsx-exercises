import React from "react";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name="John"/>
        <Counter initialValue={5} incrementAmount={5} incrementInterval={500}/>
        <ClickCounter/>
        <ClickTracker/>
      </div>
    );
  }
}
