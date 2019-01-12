import React, { Component } from "react";
import axios from "axios";
import Character from "./Character";

class CharacterSelection extends Component {
  constructor() {
    super();
    this.state = {
      characters: []
    };
  }

  async componentDidMount() {
    const res = await axios.get("characters.json");
    this.setState({
      characters: res.data.characters
    });
  }

  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        <div className="row">
          <h1 className="display-3">
            <span className="text-danger">Select</span> a Character
          </h1>
        </div>
        <div className="row">
          {characters.map((character, index) => {
            return <Character key={index} character={character} />;
          })}
        </div>
      </div>
    );
  }
}

export default CharacterSelection;
