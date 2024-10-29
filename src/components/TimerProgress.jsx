import React from 'react';

const TimerProgress = ({ percentage }) => {
    const circumference = 180 * 2 * Math.PI;

    const offset = circumference - percentage / 100 * circumference;

    return (
        <div className="timer-progress">
            <svg width="500px" height="500px">
                <circle 
                    className='timer-progress-outline'
                    r={180}
                    cx={250}
                    cy={250}
                />
                <circle
                    className='timer-progress-bar'
                    r={180}
                    cx={250}
                    cy={250}
                    strokeDasharray={circumference}
                    strokeDashoffset={-offset}
                />
            </svg>

            {/*<div className="timer-progress-text" id="progress-text">{Math.round(percentage, 3)}%</div>*/}
        </div>
    );
};

export default TimerProgress;