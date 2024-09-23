import React from 'react';
import { Link } from "react-router-dom";
import largeIcon from '../icon2.png';

function Home() {     
    return (     
        <div style={base}>  
            {Intro()}
            <line/>
            {ProjectShowcase()}
            <hr />
            {About()}
            <hr />
            {Contact()}
        </div>    
    ); 
} 

function Intro() {
    return <div style ={intro}>
                {Icon()}
                <div>
                    <p style = {title}>
                        Ryan Koenig 
                    </p>
                    <p style = {subtitle}>
                        UCD, BSc Computer Science 
                        Software Engineer
                    </p>
                </div>
            </div>
}

function Icon() {
    return <img 
            src={largeIcon} 
            alt="Ryan Koenig" 
            draggable="false" 
            style = {me}
            />
}

function ProjectShowcase() {
    return  <div style = {projectShowcase}>
                    <div style = {video}> peepee </div>
                    <p> words words words, business business business </p>
            </div>
}

function About() {
    return  <div style = {about}>
                <p> words words words, business business business </p>
                <div style = {video}> peepee </div>
            </div>
}

function Contact() {
    return  <div style = {contact}>
                <a href="mailto:koenigryan4@gmail.com" target="_blank">Email me</a>
                <a href="tel:+3530877101312" target="_blank">Call me</a>
                <a href="https://www.linkedin.com/in/ryanakoenig/" target="_blank"> My LinkedIn </a>
                <a href="https://github.com/therakisback" target="_blank"> My Github </a>
            </div>
}

const line = ({ color }) = (
    <hr style= {{color: color, border: "0px", height: "3px"}} />

)

const base = {
    display: "grid",
}


const intro = {
    position: "relative",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    top: "1in",
    left: "15%",
    zIndex: "0",
    backgroundColor: "#303030",
    paddingLeft: "6%",
    paddingTop: ".5in",
    paddingBottom:".5in",
    paddingRight: "4%",
    width: "60%",
    height: "3in",
    justifyContent: "center"
};

const title = {
    position: "relative",
    top: "0in",
    fontSize: "3em",
  }

const subtitle = {

}

const me = {
    height: "3in",
    display: "inline",
  }

const projectShowcase = {
    backgroundColor: "#303030",
    position: "relative",
    display: "grid",
    gridTemplateColumns: "40% auto",
    gridGap: "10%",
    top: "2in",
    left: "7%",
    zIndex: "0",
    width: "86%",
    paddingTop: ".5in",
    paddingBottom: ".5in",
}

const video = {
    backgroundColor: "#ffffff",
}

const about = {
    backgroundColor: "#303030",
    position: "relative",
    display: "grid",
    gridTemplateColumns: "auto 40%",
    gridGap: "10%",
    top: "2in",
    left: "7%",
    zIndex: "0",
    width: "86%",
    paddingTop: ".5in",
    paddingBottom: ".5in",
}

const contact = {
    backgroundColor: "#303030",
    position: "relative",
    display: "grid",
    gridTemplateColumns: "10% 10% 10% 10%",
    justifyItems: "center",
    alignItems: "bottom",
    justifyContent: "center",
    gridGap: "10%",
    top: "2in",
    left: "7%",
    zIndex: "0",
    width: "86%",
    paddingTop: ".5in",
}

export default Home;