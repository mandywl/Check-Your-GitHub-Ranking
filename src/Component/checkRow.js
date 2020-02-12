import React, { Component } from "react";

class CheckRow extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckRow;
