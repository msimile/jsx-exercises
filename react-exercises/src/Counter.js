import React, { useEffect, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({
  initialValue = 10,
  incrementInterval = 1000,
  incrementAmount = 10,
}) {
  const [counter, setCounter] = useState(initialValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((c) => c + incrementAmount);
    }, incrementInterval);
    console.log("I have mounted");

    return () => {
      clearInterval(interval);
      console.log("I have unmounted");
    };
  }, []);

  return <h1>Counter: {counter}</h1>;
}

// export class Counter extends React.Component {
//   state = {
//     count: this.props.initialValue,
//   };

//   componentDidMount() {
//     setInterval(() => {
//       this.setState((state) => {
//         return {
//           count: state.count + this.props.incrementAmount,
//         };
//       });
//     }, this.props.incrementInterval);
//   }

//   render() {
//     return <CounterDisplay display={this.state.count} />;
//   }
// }

// Counter.defaultProps = {
//   initialValue: 0,
//   incrementInterval: 1000,
//   incrementAmount: 1,
// };
