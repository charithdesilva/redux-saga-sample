import React, { Component } from "react";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Redux Saga - COLR API</h1>
        <div>
          {this.props.colorAPI.colors.map((color, i) => (
            <div key={i}>
              {color.tags.map(({ name }, j) => (
                <div key={j} style={{ background: name }}>
                  <h4>{name}</h4>
                </div>
              ))}
            </div>
          ))}
        </div>
        <button onClick={this.props.fetchContinuouslyRequest}>
          Start calling colours
        </button>
      </div>
    );
  }
}

export default App;
