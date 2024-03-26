import React, {Component} from 'react';
import './Navbar.css';
import { BrowserRouter as Router, Routes, Route, Navigate, Link} from "react-router-dom";

export default function Navbar() {
    return(
        <nav>
            <ul>
                <Link to={"./About"}>about</Link>
            </ul>
        </nav>
    );
}