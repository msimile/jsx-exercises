import React, { useState, useEffect } from "react";
import { useCounter } from "./useCounter";
// import { CounterButton } from "./CounterButton";

export function ClickCounter({ initialValue = 0 }) {
  const { counter, onIncrement, onDecrement, onReset } =
    useCounter(initialValue);

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

//-------------------------------------------------------------

// CLICK COUNTER FUNCTION COMPONENT //

// export function ClickCounter({ initialValue = 0 }) {
//   const [counter, setCounter] = useState(initialValue);

//   function handleClickCounter() {
//     setCounter((c) => c + 1);
//   }

//   function onCounterChange() {
//     console.log(`Current value is ${counter}`);
//   }

//   useEffect(onCounterChange, [counter]);

//   return (
//     <div>
//       <h2>Counter: {counter}</h2>
//       <button onClick={handleClickCounter}>Increment</button>
//     </div>
//   );
// }

// ----------------------------------------------------------------

// CLICK COUNTER CLASS COMPONENT //

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
