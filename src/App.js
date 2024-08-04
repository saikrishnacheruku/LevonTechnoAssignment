// src/App.js
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import './App.css';

const MainContent = lazy(() => import('./components/MainContent'));
const Settings = lazy(() => import('./components/Settings'));

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <div className="main-layout">
                    <Sidebar />
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path="/settings" element={<Settings />} />
                            <Route path="/" element={<MainContent />} />
                        </Routes>
                    </Suspense>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
