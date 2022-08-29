import React from "react";

export class Age extends React.Component {
  render() {
    return this.props.age > 18 && <p>Your age is {this.props.age}</p>;
  }
}

Age.defaultProps = {
  age: "not defined",
};
