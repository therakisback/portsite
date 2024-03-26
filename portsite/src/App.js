import React, {Component} from 'react';
import vid from './htf.mp4';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";

class App extends Component {
  handleClick() {
    window.open("./About");
  }

  render() {
    return (
      <div className="App">
        <header className="Sticky">
          <Router className="Menu-Bar">
              <Navbar />
              <Routes>
                <Route path="./About" component={About} />
              </Routes>
              
          </Router>
        </header>

        
      </div>
    );
  }
}

export default App;

