import React, { Component } from 'react';
import SiteGUI from "../presentation/SiteGUI.js";
import Game from "./Game.js";
import '../../../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SiteGUI />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
		<Game />
      </div>
    );
  }
}

export default App;
