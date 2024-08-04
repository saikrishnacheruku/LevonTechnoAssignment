import React from 'react';
import LineChartWidget from './LineChartWidget';
import BarChartWidget from './BarChartWidget';
import PieChartWidget from './PieChartWidget';
import RecentActivityWidget from './RecentActivityWidget';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="widgets">
        <LineChartWidget />
        <BarChartWidget />
        <PieChartWidget />
        <RecentActivityWidget />
      </div>
    </div>
  );
};

export default Dashboard;
