import React, { useState } from "react";

export function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    remember: false,
    login: false,
  });

  function handleLoginInput(event) {
    const { name, type, value, checked } = event.target;
    setForm((data) => ({
      ...data,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function onLogin() {
    setForm((data) => ({
      ...data,
      login: true,
    }));
  }

  function handleReset() {
    setForm(() => ({
      username: "",
      password: "",
      remember: false,
    }));
  }

  console.log(form);

  return (
    <div>
      <h1>My Login Form</h1>
      <label for="username">Username </label>
      <input
        id="username"
        type="username"
        name="username"
        value={form.username}
        onChange={handleLoginInput}
      />
      <br />
      <br />
      <label for="password">Password </label>
      <input
        id="passWord"
        type="password"
        name="password"
        value={form.password}
        onChange={handleLoginInput}
      />
      <br />
      <br />
      <label for="remember">Remember </label>
      <input
        id="remember"
        type="checkbox"
        name="remember"
        checked={form.remember}
        onChange={handleLoginInput}
      />
      <br />
      <br />
      {form.username && form.password ? (
        <button type="submit" name="login" value={form.login} onClick={onLogin}>
          Login
        </button>
      ) : (
        <button type="submit" name="login" disabled>
          Login
        </button>
      )}
      <br />
      <br />
      <button type="button" name="reset" onClick={handleReset}>
        Reset Form
      </button>
    </div>
  );
}

// export class Login extends React.Component {
//   state = {
//     username: "",
//     password: "",
//     remember: false,
//     login: false,
//   };

//   handleLoginInput = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     const type = event.target.type;
//     const checked = event.target.checked;
//     console.log(value);

//     this.setState({
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   onLogin = () => {
//     this.setState({
//       login: true,
//     });
//   };

//   handleReset = () => {
//     this.setState({
//       username: "",
//       password: "",
//       remember: false,
//     });
//   };

//   render() {
//     const buttonBackgroundColor = {
//       backgroundColor: this.state.password.length < 8 ? "red" : "green",
//       color: "white",
//     };
//     return (
//       <div>
//         <h1>My Login Form</h1>
//         <label for="userName">Username </label>
//         <input
//           id="userName"
//           type="text"
//           name="username"
//           value={this.state.username}
//           onChange={this.handleLoginInput}
//         />
//         <br />
//         <br />
//         <label for="passWord">Password </label>
//         <input
//           id="passWord"
//           type="password"
//           name="password"
//           value={this.state.password}
//           onChange={this.handleLoginInput}
//         />
//         <br />
//         <br />
//         <label for="remember">Remember </label>
//         <input
//           id="remember"
//           type="checkbox"
//           name="remember"
//           checked={this.state.remember}
//           //   value={this.state.remember}
//           onChange={this.handleLoginInput}
//         />
//         <br />
//         <br />
//         {this.state.username && this.state.password ? (
//           <button
//             type="submit"
//             name="login"
//             value={this.state.login}
//             onClick={this.onLogin}
//             style={buttonBackgroundColor}
//           >
//             Login
//           </button>
//         ) : (
//           <button type="submit" name="login" disabled>
//             Login
//           </button>
//         )}
//         <br />
//         <br />
//         <button type="button" name="reset" onClick={this.handleReset}>
//           Reset Form
//         </button>
//       </div>
//     );
//   }
// }
