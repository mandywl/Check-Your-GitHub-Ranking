import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getResult, sendId } from "./Api";
import ButtonDiv from "./Component/buttonDiv";
import CheckRow from "./Component/checkRow";
import CheckRowInner from "./Component/checkRowInner";
import Header from "./Component/header";

class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      your_id: "",
      other_id: "",
      average: "",
      credit_remaining: ""
    };
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <CheckRow>
            <CheckRowInner name="Your" />
            <input
              ref="your_id"
              type="text"
              className=""
              placeholder="Input Your Github ID"
              value={this.state.your_id}
              onChange={e => this._dealInputValue(e, "your_id")}
            />
            <button onClick={() => this._dealWithYourId()}>
              <ButtonDiv name="Your" />
            </button>
          </CheckRow>
          <CheckRow>
            <CheckRowInner name="Someone's" />
            <input
              ref="other_id"
              type="text"
              className=""
              placeholder="Input other's Github ID"
              value={this.state.other_id}
              onChange={e => this._dealInputValue(e, "other_id")}
            />
            <button onClick={() => this._dealWithSomeoneId()}>
              <ButtonDiv name="Someone's" />
            </button>
          </CheckRow>
          <div>
            <p>Average: {this.state.average}</p>
            <p>Credit remaining: {this.state.credit_remaining}</p>
          </div>
        </div>
      </div>
    );
  }

  _dealInputValue(e, type) {
    const value = e.target.value;
    if (type === "your_id") {
      this.setState({
        your_id: value
      });
      console.log(this.state.your_id);
    } else if (type === "other_id") {
      this.setState({
        other_id: value
      });
    }
  }

  _dealWithYourId() {
    const { your_id } = this.state;
    const data = {
      headers: {
        "Content-Type": "application/json"
      },
      githubId: your_id
    };
    console.log(data);

    sendId(data).then(res => {
      console.log(res);
      let uuid = JSON.parse(JSON.stringify(res.message.uuid_github));
      console.log(uuid);
      let params = {
        id: uuid,
        access: "f62345e8-9378-425b-b122-ecb4a9610a38"
      };
      getResult(params).then(res => {
        let rank = JSON.parse(JSON.stringify(res));
        console.log(rank);
        this.setState({
          average: rank.message.average,
          credit_remaining: rank.message.credit_remaining
        });
        console.log(this.state);
      });
    });
  }

  _dealWithSomeoneId() {
    const { other_id } = this.state;
    const data = {
      headers: {
        "Content-Type": "application/json"
      },
      githubId: other_id
    };
    console.log(data);

    sendId(data).then(res => {
      console.log(res);
      let uuid = JSON.parse(JSON.stringify(res.message.uuid_github));
      console.log(uuid);
      let params = {
        id: uuid,
        access: "f62345e8-9378-425b-b122-ecb4a9610a38"
      };
      getResult(params).then(res => {
        let rank = JSON.parse(JSON.stringify(res));
        console.log(rank);
        this.setState({
          average: rank.message.average,
          credit_remaining: rank.message.credit_remaining
        });
        console.log(this.state);
      });
    });
  }
}

// ========================================

ReactDOM.render(<Home />, document.getElementById("root"));
