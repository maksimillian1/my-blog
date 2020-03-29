import React from 'react';
import { NavLink } from 'react-router-dom';


export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">    
                <ul className="navbar-nav">
                    <li className="nav-item nav-link">
                        <NavLink to="/">Main</NavLink>
                    </li>
                    <li className="nav-item nav-link">
                        <NavLink to="/posts">Posts</NavLink>
                    </li>
                    <li className="nav-item nav-link">
                        <NavLink to="/form">Form</NavLink>
                    </li>
                </ul>
            </div>   
        </nav>
        
    );
}