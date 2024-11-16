import React from 'react';

const TimerProgress = ({ percentage }) => {
    const radius = 215;
    const strokeWidth = 20;
    const normalizedRadius = radius - strokeWidth / 2;
    const circumference = normalizedRadius * 2 * Math.PI;

    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className="progress-circle">
            <svg>
                <circle
                    className='container-area'
                    strokeWidth={ strokeWidth }
                    r={ normalizedRadius }
                    cx={250}
                    cy={250}
                />
                <circle
                    className='filled-area'
                    strokeWidth={ strokeWidth }
                    r={ normalizedRadius }
                    cx={250}
                    cy={250}
                    strokeDasharray={ circumference }
                    strokeDashoffset={ -offset }
                />
            </svg>
        </div>
    );
};

export default TimerProgress;