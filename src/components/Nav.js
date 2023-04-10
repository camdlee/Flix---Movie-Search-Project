import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthState from './AuthState';
// import Nav from './Nav.css';



export default function Navbar(){

const navItemStyle = {
    color: '#f7f7f2ff',
}

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand" to="/">
                    Streaming App
                </Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link disabled" to="/signup">
                            Sign Up
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link disabled" to="/signin">
                            Sign In
                        </Link>
                    </li>
                    <li className="nav-item" sx={{ navItemStyle }}>
                        <Link className="nav-link disabled" to="/movie" sx={{ navItemStyle }}>
                            Search
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link disabled" to="/watchlist">
                            Watch List
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link disabled" to="/profile">
                            Profile
                        </Link>
                    </li>
                    <li className="nav-item">
                        <AuthState/>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
        )

}
