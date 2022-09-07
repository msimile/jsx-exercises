import React from "react";

export class ClickTracker extends React.Component {
  state = {
    lastClicked: "",
  };

  clickTrackerHandler = (event) => {
    this.setState({
      lastClicked: event.target.name,
    });
  };

  render() {
    return (
      <div>
        <h1>Click Tracker</h1>
        <button name="Button 1" onClick={this.clickTrackerHandler}>
          Button 1
        </button>
        <button name="Button 2" onClick={this.clickTrackerHandler}>
          Button 2
        </button>
        <button name="Button 3" onClick={this.clickTrackerHandler}>
          Button 3
        </button>
        <p>
          Last clicked button is:<strong> {this.state.lastClicked}</strong>
        </p>
      </div>
    );
  }
}
