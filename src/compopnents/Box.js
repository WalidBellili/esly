import React, { Component } from "react";

class Box extends Component {
  constructor() {
    super();

    console.log(this);
  }
  render() {
    return (
      <div className="box col-sm-3 col-6">
        <span
          style={{ fontSize: 100, color: this.props.color }}
          className="material-icons"
        >
          {this.props.icon}
        </span>
        <p>{`${this.props.value}${this.props.unit}`}</p>
      </div>
    );
  }
}
export default Box;
