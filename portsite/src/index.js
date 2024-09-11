import React from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import pages for index to route to
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

//Pages for functionality and errors
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
import App from './App';

/* Index function
    Works as a 'table of contents' for BrowserRouter
    Without marking pages here the router has no idea which
     -page to take the user to.
*/

export default function Index() {
  return(
    <BrowserRouter>       
      <Routes>         
        <Route path="/" element={<Layout />}>       
        <Route index element={<Home />} />           
        <Route path="about" element={<About />} /> 
        <Route path="projects" element={<Projects />} /> 
        <Route path="contact" element={<Contact />}  />   
        <Route path="*" element={<NoPage />} />         
        </Route>       
      </Routes>     
    </BrowserRouter> 
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);

