import React, { Component } from "react";
import Header from "./components/Header";
import CharacterSelection from "./components/CharacterSelection";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CharacterSelection />
      </div>
    );
  }
}

export default App;
