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

                <button onClick={handleStartStop} className='start-stop-button button'>{isRunning ? 'Stop' : 'Start'}</button>
                <button onClick={handleReset} className='reset-button button'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-refresh-ccw"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg>
                </button>
            </div>
            <div className="timer-modes">
                <button onClick={() => setOnBreak(false)} className={!onBreak ? 'timer-modes active' : ''}>Pomodoro</button>
                <button onClick={() => setOnBreak(true)} className={onBreak ? 'timer-modes active' : ''}>Break</button>
            </div>
        </div>
    );
}

export default Pomodoro;