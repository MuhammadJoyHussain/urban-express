import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="nav">
                <ul>
                    <h1 className="logo">Urban Express</h1>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/destination">Destination</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><button><Link to="/login">Login</Link></button></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;