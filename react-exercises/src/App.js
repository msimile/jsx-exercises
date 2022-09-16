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

export function App() {
  const [showCounter, setShowCounter] = useState(true);
  // state = {
  //   language: "en",
  // };

  function handleToggleCounter() {
    setShowCounter((s) => !s);
  }

  return (
    <div>
      {/* <LanguageContext.Provider value={this.state.language}>
          <select
            value={this.state.language}
            onChange={this.handleLanguageChange}
          >
            <option value="en">ENGLISH</option>
            <option value="it">ITALIANO</option>
          </select>
        <DisplayLanguage />
        <hr></hr> */}
      <Container
        title={
          <h1 className="title">
            <b>My Awesome React App</b>
          </h1>
        }
      >
        <hr></hr>
        <Hello />
        <Welcome name="John" />
        <GithubUser username="msimile" />
        <Sum numbers={[12, 14, 23, 27]} />
        <ClickCounter />
        <Login />
        <br />
        {showCounter && <Counter />}
        <button onClick={handleToggleCounter}>Toggle Counter</button>
        {/* <Counter
              initialValue={5}
              incrementAmount={5}
              incrementInterval={500}
            />
            <ClickTracker />
            <InteractiveWelcome />
            <UncontrolledLogin />
            <TodoList
              render={(state, remove) =>
                state.todos.map((todo, index) => (
                  <li key={index}>
                    {todo}
                    <button onClick={remove}>Remove Task</button>
                  </li>
                ))
              }
            /> */}
      </Container>
      {/* </LanguageContext.Provider> */}
    </div>
  );
}
