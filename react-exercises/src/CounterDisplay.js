import React from "react";

export class CounterDisplay extends React.Component {
  render() {
    return <h1>Counter: {this.props.display}</h1>;
  }
}
