import React, {useState} from "react";
// import { CounterButton } from "./CounterButton";

export function ClickCounter({initialValue = 0}) {
  const [counter, setCounter] = useState(initialValue);

  function handleClickCounter() {
    setCounter((c) => c + 1);
  }

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={handleClickCounter}>Increment</button>
    </div>
  );
}

// export class ClickCounter extends React.Component {
//   state = {
//     count: this.props.initialValue,
//   };

//   handleClickCounter = (event) => {
//     this.setState((state) => {
//       return {
//         count: state.count + this.props.incrementBy,
//       };
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h1>Click Counter: {this.state.count}</h1>
//         {/* <button onClick={this.handleClickCounter}>Increment</button> */}
//         <CounterButton counter={this.handleClickCounter} />
//       </div>
//     );
//   }
// }

// ClickCounter.defaultProps = {
//   initialValue: 0,
//   incrementBy: 1,
// };
