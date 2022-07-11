import React from "react";
import Box from "./compopnents/Box";
import "./style/global.css";

class App extends React.Component {
  constructor() {
    super();
    this.tempsMin = -20;
    this.tempsMax = 40;
    this.heartMin = 80;
    this.heartMax = 180;
    this.stepsMin = 0;
    this.stepsMax = 50000;
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {/* water */}
          <Box icon="local_drink" color="#3A85FF" value="1.5" unit="L" />
          {/* Steps */}
          <Box icon="directions_walk" color="black" value="3000" unit="steps" />
          {/* Heart */}
          <Box icon="favorite" color="red" value="120" unit="bpm" />
          {/* Température */}
          <Box icon="wb_sunny" color="yellow" value="-10" unit="°C" />

          <h1 className="text-primary">Hello !</h1>
          <p>{`heart : ${this.heartMin}`}</p>
          <p>{`Température : ${this.tempsMin}`}</p>
          <p>{`Steps : ${this.stepsMin}`}</p>
        </div>
      </div>
    );
  }
}

export default App;
