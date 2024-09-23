import React from "react"; 
import { Link } from "react-router-dom";
import iconimg from './icon1.png';

function Navbar() {   
    return (   
        <div style = {stick}> 
            <nav>
                {Icon()}
                <Link to="/" style = {textLink}>home</Link>                   
                <Link to="/Projects" style = {textLink}>projects</Link> 
                <Link to="/About" style = {textLink}>about</Link>                    
            </nav>   
        </div> 
    ); 
} 

function Icon() {
    return  <Link to="/">
                <img 
                    src={iconimg} 
                    alt="Ryan Koenig" 
                    draggable="false" 
                    style = {icon}
                />
            </Link>
}

const stick = {
    display: "flex",
    backgroundColor: "#141414",
    position: "fixed",
    color: "white",
    left: "0px",
    right: "0px",
    top: "0px",
    textIndent: ".12in",
    fontSize: "1.5em",
    zIndex: "5",
  }
  
const textLink = {
    padding: ".25in",
    position: "relative",
    bottom: ".15in",
  }

const icon = {
    height:".55in",
    alignSelf: "bottom",
  }

export default Navbar; 