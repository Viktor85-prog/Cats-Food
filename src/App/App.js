import React, { Component } from "react";

import Cards from ".././Cards/Cards";
import "./App.css";
import Background from "../assets/img/Pattern.png";

const containerStyle = {
  width: "100%",
  minHeight: "100vh",
  backgroundImage: `url(${Background})`,
};

class App extends Component {
  state = {
    data: [
      {
        supplements: "с фуа-гра",
        portions: 10,
        mouses: 1,
        customer: false,
        weight: 0.5,
        selectedText: "Печень утки разварная с артишоками.",
        selected: false,
        active: true,
        id: 0,
      },
      {
        supplements: "с рыбой",
        portions: 40,
        mouses: 2,
        customer: false,
        weight: 2,
        selectedText: "Головы щучьи с чесноком да свежайшая сёмгушка.",
        selected: true,
        active: true,
        id: 1,
      },
      {
        supplements: "с курой",
        portions: 100,
        mouses: 5,
        customer: true,
        weight: 5,
        selectedText: "Филе из цыплят с трюфелями в бульоне.",
        selected: false,
        active: false,
        id: 2,
      },
    ],
  };
  render() {
    return (
      <div style={containerStyle} className="app-wrapper">
        <h1 className="app-title">Ты сегодня покормил кота?</h1>
        <Cards data={this.state.data} />
      </div>
    );
  }
}
export default App;
