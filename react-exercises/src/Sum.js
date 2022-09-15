import React from "react";

export function Sum({ numbers }) {
  const initialValue = 0;
  return (
    <h1>
      The sum of {numbers.toString()} is:
      {numbers.reduce((prevValue, currValue) => prevValue + currValue, initialValue)}
    </h1>
  );
}
