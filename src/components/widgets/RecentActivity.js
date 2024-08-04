import React from 'react';
import '../../styles/widgets/RecentActivity.css';

const RecentActivity = () => {
    return (
        <div className="recent-activity-widget">
            <h3>Recent Activity</h3>
            <ul>
                <li>User1 commented on your post</li>
                <li>User2 liked your photo</li>
                <li>User3 followed you</li>
                {/* Add more activities */}
            </ul>
        </div>
    );
};

export default RecentActivity;
