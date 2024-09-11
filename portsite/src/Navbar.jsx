import React from "react"; 
import { BrowserRouter, Route, Link } from "react-router-dom";
import iconimg from './icon1.png';

function Navbar() {   
    return (   
        <div className="stick"> 
            <nav>
                {icon()}
                <Link to="/" className="textlink">home</Link>                   
                <Link to="/About" className="textlink">about</Link>
                <Link to="/Projects" className="textlink">projects</Link> 
                <Link to="/Contact" className="textlink">contact</Link>                     
            </nav>   
        </div> 
    ); 
} 

function icon() {
    return      <Link to="/">
                    <img src={iconimg} alt="RKIcon" />
                </Link>
}

export default Navbar; 