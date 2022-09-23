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
import { Route, Routes } from "react-router-dom";

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
    <Container>
      <Routes>
        <Route path="/" element={<Welcome name="Marco" />} />
      </Routes>
    </Container>
  );
}
