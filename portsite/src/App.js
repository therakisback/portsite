import React, {Component} from 'react';
import vid from './htf.mp4';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className = "Sticky">
          <p className = "Home-Bar">home</p>
          <p className = "Menu-Bar">about me</p>
        </header>

        <header className="App-header">
          <video src = {vid} width="300" height="300" controls>
          </video>
        </header>
      </div>
    );
  }
}

export default App;

