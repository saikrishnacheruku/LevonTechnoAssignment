import React from 'react';
import '../styles/MainContent.css';
import LineChartWidget from './widgets/LineChartWidget';
import BarChartWidget from './widgets/BarChartWidget';
import PieChartWidget from './widgets/PieChartWidget';
import RecentActivity from './widgets/RecentActivity';

const MainContent = () => {
    return (
        <div className="main-content">
            <div className="widget">
                <LineChartWidget />
            </div>
            <div className="widget">
                <BarChartWidget />
            </div>
            <div className="widget">
                <PieChartWidget />
            </div>
            <div className="widget">
                <RecentActivity />
            </div>
        </div>
    );
}

export default MainContent;
