import React from "react";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { ClickCounter } from "./ClickCounter";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name="John"/>
        <Counter initialValue={5} incrementAmount={5} incrementInterval={500}/>
        <ClickCounter/>
      </div>
    );
  }
}
