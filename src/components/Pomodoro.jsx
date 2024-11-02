// Pomodoro.js
import React, { useState, useEffect } from 'react';
import TimerProgress from './TimerProgress';

function Pomodoro() {
    const studyDuration = 25 * 60;
    const shortBreakDuration = 5 * 60;
    const longBreakDuration = 15 * 60;

    const [ timeLeft, setTimeLeft ] = useState(studyDuration);
    const [ isRunning, setIsRunning ] = useState(false);
    const [ cycleStage, setCycleStage ] = useState(0);
    const [ percentage, setPercentage ] = useState(100);

    const stages = [
        { duration: studyDuration, type: 'work' },
        { duration: shortBreakDuration, type: 'shortBreak' },
        { duration: studyDuration, type: 'work' },
        { duration: shortBreakDuration, type: 'shortBreak' },
        { duration: studyDuration, type: 'work' },
        { duration: longBreakDuration, type: 'longBreak' },
    ];

    useEffect(() => {
        let intervalId;

        if (isRunning) {
            intervalId = setInterval(() => {
                setTimeLeft((prevTime) => {
                    if (prevTime > 0) {
                        setPercentage((prevTime / stages[cycleStage].duration) * 100);
                        return prevTime - 1;
                    } else {
                        const nextStage = (cycleStage + 1) % stages.length;

                        setCycleStage(nextStage);
                        setTimeLeft(stages[nextStage].duration);

                        return stages[nextStage].duration;
                    }
                });
            }, 1000);
        }

        return () => clearInterval(intervalId);
    }, [ isRunning, cycleStage, stages ]);

    const handleStartStop = () => {
        setIsRunning((prev) => !prev);
    };

    const handleReset = () => {
        setIsRunning(false);
        setCycleStage(0);
        setTimeLeft(studyDuration);
        setPercentage(100);
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <section className="timer-container">
            <div className="timer-interface">
                <TimerProgress percentage={percentage} />
                <div className="timer">
                    <h1 id="time">{formatTime(timeLeft)}</h1>
                    <button onClick={handleStartStop} className="start-stop-button button">
                        {isRunning ? 'Stop' : 'Start'}
                    </button>
                    <button onClick={handleReset} className="reset-button button">Reset</button>
                </div>
                <div className="timer-modes">
                    <button className={stages[cycleStage].type === 'work' ? 'active button' : 'button'}>Pomodoro</button>
                    <button className={stages[cycleStage].type === 'shortBreak' ? 'active button' : 'button'}>Short Break</button>
                    <button className={stages[cycleStage].type === 'longBreak' ? 'active button' : 'button'}>Long Break</button>
                </div>
            </div>
        </section>
    );
}

export default Pomodoro;
