import React from "react";

export class Counter extends React.Component {
  state = {
    count: this.props.initialValue,
  };

  constructor(props) {
    super(props);

    setInterval(() => {
      this.setState((state) => {
        return {
          count: state.count + this.props.incrementAmount,
        };
      });
    }, this.props.incrementInterval);
  }

  render() {
    return <h1>Counter: {this.state.count}</h1>;
  }
}

Counter.defaultProps = {
  initialValue: 0,
  incrementInterval: 1000,
  incrementAmount: 1,
};
