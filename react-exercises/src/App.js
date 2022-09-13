import React from "react";
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

export class App extends React.Component {
  render() {
    return (
      <div>
        <Container title="Container">
          <Hello />
          <Welcome name="John" />
          <Counter
            initialValue={5}
            incrementAmount={5}
            incrementInterval={500}
          />
          <ClickCounter />
          <ClickTracker />
          <InteractiveWelcome />
          <Login />
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
          />
        </Container>
      </div>
    );
  }
}
