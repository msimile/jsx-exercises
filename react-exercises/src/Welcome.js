import React from "react";
import { Age } from "./Age";

export function Welcome({ name = "World" }) {
  return (
    <div>
      <h1>Welcome, {name}!</h1>
      {name === "John" && <Age age={18} />}
    </div>
  );
}

// export class Welcome extends React.Component {
//   render() {
//     return (
//       <div className="welcome">
//         <p>Welcome, {this.props.name}!</p>
//         {this.props.name === "John" && <Age age={18} />}
//       </div>
//     );
//   }
// }

// Welcome.defaultProps = {
//   name: "visitor",
//   age: "not defined",
// };
