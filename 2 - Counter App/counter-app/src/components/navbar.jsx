import React, { Component } from 'react';

//Stateless Functional Component
const NavBar = (props) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Navbar <span className="btn btn-secondary">{props.totalCounters}</span>
                </a>
            </div>
        </nav>
    );
}

export default NavBar;