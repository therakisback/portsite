import React from 'react';
import largeIcon from '../icon2.png';

function Home() {     
    return (     
        <div>  
            <div className="intro">
                <img source="largeIcon" draggable="false" alt="Ryan Koenig Icon">
                
                </img>
                <p className="title">
                    Ryan Koenig 
                </p>
                <p className="subtitle">
                    UCD, BSc Computer Science 
                    Software Engineer
                </p>
            </div>
            <div className="projectShowcase">
                <p></p>
            </div>
            <div className="about">
                <p></p>
            </div>
            <div className="contact">
                <p></p>
            </div>
        </div>    
    ); 
} 

export default Home;