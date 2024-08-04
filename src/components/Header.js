// src/components/Header.js
import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li>Dashboard</li>
                    <li>Profile</li>
                    <li>Notifications</li>
                </ul>
            </nav>
            <div className="user-profile">
                <img src="profile-pic-url" alt="User Profile" />
            </div>
        </header>
    );
}

export default Header;
