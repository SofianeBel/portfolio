import { useState } from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import Top from "./components/top";
import Links from "./components/Links";
import Summary from "./components/summary";
import Btns from "./components/Btns";

function App() {
  return (
    <>
      <div className="App">
        <Container>
          <Top />
          <Links />
        </Container>
        <Summary />
        <Container>
          <Btns />
        </Container>
      </div>
    </>
  );
}

export default App;
