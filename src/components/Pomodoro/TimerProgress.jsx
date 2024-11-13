import React from 'react';
import { useTheme } from '../../context/Theme/ThemeMode';

const TimerProgress = ({ percentage }) => {
    const radius = 215;
    const strokeWidth = 20;
    const normalizedRadius = radius - strokeWidth / 2;
    const circumference = normalizedRadius * 2 * Math.PI;

    const offset = circumference - percentage / 100 * circumference;

    const { themeMode } = useTheme();

    return (
        <div className="progress-circle" style={{

            rotate: '-90deg',
            display: 'flex'

        }}>
            <svg width="500px" height="500px">
                <circle
                    stroke="transparent"
                    fill="none"
                    strokeWidth={strokeWidth}
                    r={normalizedRadius}
                    cx={250}
                    cy={250}
                />
                <circle
                    stroke={themeMode ? "rgb(141, 82, 209)" : "rgb(105, 219, 77)"}
                    fill="none"
                    strokeWidth={strokeWidth}
                    r={normalizedRadius}
                    cx={250}
                    cy={250}
                    strokeDasharray={circumference}
                    strokeDashoffset={-offset}
                    style={{
                        transition: 'stroke-dashoffset 0.5s ease',
                    }}
                    strokeLinecap="round"
                />

            </svg>
        </div>
    );
};

export default TimerProgress;