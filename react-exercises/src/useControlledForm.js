import { useState } from "react";

export function useControlledForm(props) {
  const [form, setForm] = useState(props);

  function handleInputChange(event) {
    setForm((form) => ({
      ...form,
      [event.target.name]: event.target.value,
    }));
  }

  return {
    username: form.username,
    password: form.password,
    handleInputChange,
  };
}
