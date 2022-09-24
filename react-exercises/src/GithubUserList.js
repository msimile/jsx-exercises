import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { GithubUser } from "./GithubUser";

export function GithubUserList() {
  const [user, setUser] = useState({ userList: [] });
  const [input, setInput] = useState("");

  function handleInput(event) {
    setInput(event.target.value);
  }

  function handleAddUsername() {
    setUser({ userList: [...user.userList, input] });
  }

  return (
    <div>
      <h1>Github User List</h1>
      <ul>
        {user &&
          user.userList.map((item, index) => (
            <li key={index}>
              <Link to={item}>{item}</Link>
            </li>
          ))}
      </ul>
      <input
        name="userinput"
        onChange={handleInput}
        placeholder="Type a Github username..."
      />
      <button onClick={handleAddUsername}>Add to the list</button>
      <Outlet />
    </div>
  );
}
