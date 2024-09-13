import React, {Component} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Projects from './pages/Projects';
import About from './pages/About';
import Home from './pages/Home';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';

// Both navigation is required in Index and app.js due to some
// Weirdness in BrowserRouter.

class App extends Component {
  render() {
    return (
      <div>
          <BrowserRouter>       
            <Routes>         
              <Route path="/" element={<Layout />}>           
              <Route index element={<Home />} />        
              <Route path="about" element={<About />} />  
              <Route path="projects" element={<Projects />} />        
              <Route path="*" element={<NoPage />} />         
            </Route>       
          </Routes>     
        </BrowserRouter> 
    </div>
    );
  }
}

export default App;

