import { useControlledForm } from "./useControlledForm";

export function ControlledForm() {
  const { username, password, handleInputChange } = useControlledForm({
    username: "",
    password: "",
  });

  return (
    <div>
      <h1>My Controlled Form</h1>
      <label for="username">Username </label>
      <input
        type="text"
        onChange={handleInputChange}
        value={username}
        name="username"
      />
      <br></br>
      <br></br>
      <label for="password">Password </label>
      <input
        type="password"
        onChange={handleInputChange}
        value={password}
        name="password"
      />
    </div>
  );
}
