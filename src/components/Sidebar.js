// src/components/Sidebar.js
import React from 'react';
import '../styles/Sidebar.css'

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <ul>
                <li>Overview</li>
                <li>Analytics</li>
                <li>Settings</li>
            </ul>
        </aside>
    );
}

export default Sidebar;
