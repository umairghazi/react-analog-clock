import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = { hourHandProps: {}, minuteHandProps: {}, secondHandProps: {} };
  componentDidMount() {
    setInterval(() => {
      this.setDate();
    }, 100);
  }
  setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90;

    const mins = now.getMinutes();
    const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;

    const hour = now.getHours();
    const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;

    this.setState({
      hourHandProps: { transform: `rotate(${hourDegrees}deg)` },
      minuteHandProps: { transform: `rotate(${minsDegrees}deg)` },
      secondHandProps: { transform: `rotate(${secondsDegrees}deg)` }
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="clock">
            <div
              className="hour-hand hand"
              style={{ ...this.state.hourHandProps }}
            />
            <div
              className="minute-hand hand"
              style={{ ...this.state.minuteHandProps }}
            />
            <div
              className="second-hand hand"
              style={{ ...this.state.secondHandProps }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
