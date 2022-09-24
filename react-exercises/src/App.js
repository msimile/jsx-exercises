import React, { useState } from "react";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { TodoList } from "./TodoList";
import { Container } from "./Container";
import { DisplayLanguage } from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext";
import { Sum } from "./Sum";
import { GithubUser } from "./GithubUser";
import { GithubUserList } from "./GithubUserList";
import { ControlledForm } from "./ControlledForm";
import { CarDetails } from "./CarDetails";
import { Link, Route, Routes } from "react-router-dom";
import { ShowGithubUser } from "./ShowGithubUser";

export function App() {
  // const [showCounter, setShowCounter] = useState(true);
  // const [lang, setLang] = useState("en");

  // function handleToggleCounter() {
  //   setShowCounter((s) => !s);
  // }

  // function handleLanguageChange(event) {
  //   setLang(event.target.value);
  // }

  return (
    <Container
      title={
        <div>
          <h1>Develhope React App</h1>
          <div>
            <Link to="/">
              <b>Home</b>
            </Link>{" "}
            |{" "}
            <Link to="/counter">
              <b>Counter</b>
            </Link>{" "}
            |{" "}
            <Link to="/users/msimile">
              <b>Github Account</b>
            </Link>
          </div>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Welcome name="Marco" />} />
        <Route path="/counter" element={<ClickCounter />} />
        <Route path="users/:username" element={<ShowGithubUser />} />
        <Route
          path="*"
          element={
            <div>
              <h1>Not Found</h1>
              <Link to="/">Go Home</Link>
            </div>
          }
        />
      </Routes>
    </Container>
  );
}
