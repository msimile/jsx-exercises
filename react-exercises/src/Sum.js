import React from "react";

export function Sum({ numbers = [10, 20, 30, 40] }) {
  const initialValue = 0;
  return (
    <h1>
      The sum of {numbers.toString()} is:
      {numbers.reduce(
        (prevValue, currValue) => prevValue + currValue,
        initialValue
      )}
    </h1>
  );
}

// Sum.DefaultProps = {
//      numbers: [10, 20, 30, 40]
// }
