import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import TimerProgress from './TimerProgress';

function Pomodoro() {
    // 25 | 5 seconds
    const studyDuration = 25 * 60;
    const breakDuration = 5 * 60;

    const [timeLeft, setTimeLeft] = useState(studyDuration);
    const [isRunning, setIsRunning] = useState(false);
    const [onBreak, setOnBreak] = useState(false);
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        let intervalId;

        if (isRunning) {
            intervalId = setInterval(() => {
                setTimeLeft((prevTime) => {
                    if (prevTime > 0) {
                        setPercentage((timeLeft / studyDuration) * 100);
                        return prevTime - 1;
                    } else {
                        setOnBreak((prevOnBreak) => {
                            const newOnBreak = !prevOnBreak;
                            setTimeLeft(newOnBreak ? breakDuration : studyDuration);
                            return newOnBreak;
                        });
                        return 0;
                    }
                });
            }, 1000);
        }

        return () => clearInterval(intervalId);
    }, [timeLeft, isRunning, breakDuration, studyDuration]);

    const handleStartStop = () => {
        setIsRunning((prev) => !prev);
    };

    const handleReset = () => {
        setIsRunning(false);
        setTimeLeft(studyDuration);
        setOnBreak(false);
        setPercentage(100);
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <div className="timer-container">

            <TimerProgress percentage={percentage} />

            <div className="timer">
                <h1 id='time'>{formatTime(timeLeft)}</h1>

                <button onClick={handleStartStop} className='start-stop-button'>{isRunning ? 'Stop' : 'Start'}</button>
                <button onClick={handleReset} className='reset-button'>Reset</button>
            </div>
            <div className="timer-modes">
                <button onClick={() => setOnBreak(false)} className={!onBreak ? 'timer-modes active' : ''}>Pomodoro</button>
                <button onClick={() => setOnBreak(true)} className={onBreak ? 'timer-modes active' : ''}>Break</button>
            </div>
        </div>
    );
}

export default Pomodoro;