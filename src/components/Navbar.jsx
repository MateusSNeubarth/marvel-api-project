import React from "react";

export default function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <a href="http://marvel.com" target="_blank" rel="noreferrer"><img className="logo_nav" src="https://seeklogo.com/images/M/Marvel_Comics-logo-D489AEB9C1-seeklogo.com.png" alt="Marvel"></img></a>
                <ul className="navbar_list">
                    <li className="navbar_list_items">
                        <a className="navbar_a" href="/">Home</a>
                    </li>
                    <li className="navbar_list_items">
                        <a className="navbar_a" href="about">About</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}