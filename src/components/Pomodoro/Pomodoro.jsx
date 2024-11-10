import React, { useState, useEffect } from 'react';

import TimerProgress from './TimerProgress';

const studyDuration = 3; // 25 * 60
const shortBreakDuration = 3; // 5 * 60
const longBreakDuration = 3; // 15 * 60

const pomoSequence = ["work", "shortBreak", "work", "shortBreak", "work", "longBreak"];

const durations =
{
    work: studyDuration,
    shortBreak: shortBreakDuration,
    longBreak: longBreakDuration
};

function Pomodoro() {
    const [timeLeft, setTimeLeft] = useState(studyDuration);
    const [isRunning, setIsRunning] = useState(false);
    const [cycleStage, setCycleStage] = useState(0);
    const [percentage, setPercentage] = useState(100);

    useEffect(() => {
        let intervalId;

        if (isRunning) {
            intervalId = setInterval(() => {
                setTimeLeft((prevTime) => {
                    setPercentage(((prevTime - 1) / durations[pomoSequence[cycleStage]]) * 100);
                    if (prevTime > 0) {
                        return prevTime - 1;
                    } else {
                        let nextStage;

                        if (pomoSequence.length > 6) {
                            pomoSequence.shift();
                            nextStage = (cycleStage) % pomoSequence.length;
                        } else {
                            nextStage = (cycleStage + 1) % pomoSequence.length;
                        }

                        setCycleStage(nextStage);
                        setTimeLeft(durations[pomoSequence[nextStage]]);
                        setPercentage(100);
                        setIsRunning(false);

                        return durations[pomoSequence[nextStage]];
                    }
                });
            }, 1000);
        }

        return () => clearInterval(intervalId);
    }, [isRunning, cycleStage]);

    const handleStartStop = () => {
        setIsRunning((prev) => !prev);
    };

    const handleModified = (mode) => {
        handleReset();

        if (pomoSequence > 6) {
            pomoSequence.shift();
        }

        pomoSequence.unshift(mode);
    }

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
                    <button
                        onClick={() => handleStartStop()}
                        className="start-stop-button button"
                    >
                        {isRunning ? 'Stop' : 'Start'}
                    </button>
                    <button
                        onClick={() => handleReset()}
                        className="reset-button button"
                    >Reset</button>
                </div>
                <div className="timer-modes">
                    <button
                        className={pomoSequence[cycleStage] === 'work' ? 'active button' : 'button'}
                        onClick={() => handleModified('work')}
                    >Pomodoro</button>
                    <button
                        className={pomoSequence[cycleStage] === 'shortBreak' ? 'active button' : 'button'}
                        onClick={() => handleModified('shortBreak')}
                    >Short Break</button>

                    <button
                        className={pomoSequence[cycleStage] === 'longBreak' ? 'active button' : 'button'}
                        onClick={() => handleModified('longBreak')}
                    >Long Break</button>
                </div>

            </div>
        </section>
    );
}

export default Pomodoro;
