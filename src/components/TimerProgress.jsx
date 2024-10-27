import React from 'react';

const TimerProgress = ({ percentage }) => {
    const radius = 190;
    const strokeWidth = 20;
    const normalizedRadius = radius - strokeWidth / 2;
    const circumference = normalizedRadius * 2 * Math.PI;

    const offset = circumference - percentage / 100 * circumference;

    return (
        <div className="progress-circle" style={{ 
            position: 'absolute', 
            rotate:'-90deg',
            left: '-69px'
            }}>
            <svg width="500px" height="500px">
                <circle
                    stroke="#e0e0e0"
                    fill="none"
                    strokeWidth={strokeWidth}
                    r={normalizedRadius}
                    cx={250}
                    cy={250}
                />
                <circle
                    stroke="rgb(141, 82, 209)"
                    fill="none"
                    strokeWidth={strokeWidth}
                    r={normalizedRadius}
                    cx={250}
                    cy={250}
                    strokeDasharray={circumference}
                    strokeDashoffset={-offset}
                    style={{ transition: 'stroke-dashoffset 0.5s ease', 
                       }}
                />

            </svg>
            <div className="progress-text" id="progress-text" style={{ rotate:'90deg',
            zIndex: '10', position:'relative', top: '-26px', left: '115px', fontWeight: '600'
            }}>{Math.round(percentage, 3)}%</div>
        </div>
    );
};

export default TimerProgress;