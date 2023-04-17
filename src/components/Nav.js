import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import AuthState from './AuthState';
import Dropdown from 'react-bootstrap/Dropdown';
// import Nav from './Nav.css';



export default function Navbar(){

    return (
        <div className="nav-div">
            <nav className="navbar navbar-expand-lg">
                <Link className="navbar-brand" to="/" sx={{color: 'white'}}>
                    Flix
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
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/signup">
                            Sign Up
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/signin">
                            Sign In
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/movie">
                            Explore
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/watchlist">
                            Watch List
                        </Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/profile">
                            Profile
                        </Link>
                    </li> */}
                    {/* <li className="nav-item">
                        <AuthState/>
                    </li> */}
                    <li className="nav-item" sx={{ p: 0}}>
                        <Link className="nav-link" to="profile" sx={{ p:0 }}>
                            {/* <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic"> */}
                                    <Avatar className="avatar-icon" href="/profile" alt="User" src="https://pbs.twimg.com/media/EwnMiM2WgAQAH6y.jpg" / >
                                {/* </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Action</Dropdown.Item>
                                    <Dropdown.Item>Adventure</Dropdown.Item>
                                    <Dropdown.Item>Animation</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown> */}
                        </Link>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
        )

}
