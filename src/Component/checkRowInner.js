import React, { Component } from "react";

class CheckRowInner extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
        <h2>Check {this.props.name} Github Ranking</h2>
        <p>
          To check {this.props.name} Github Ranking, please click the button
          below
        </p>
      </div>
    );
  }
}

export default CheckRowInner;
