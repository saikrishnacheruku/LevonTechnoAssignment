// src/components/Settings.js
import React, { useState } from 'react';
import '../styles/Settings.css';

const Settings = () => {
    const [preferences, setPreferences] = useState({
        theme: 'light',
        notifications: true,
    });

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        setPreferences((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Preferences saved:', preferences);
    };

    return (
        <form className="settings-form" onSubmit={handleSubmit}>
            <label>
                Theme:
                <select name="theme" value={preferences.theme} onChange={handleChange}>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </select>
            </label>
            <label>
                Notifications:
                <input
                    type="checkbox"
                    name="notifications"
                    checked={preferences.notifications}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Save Preferences</button>
        </form>
    );
}

export default Settings;
