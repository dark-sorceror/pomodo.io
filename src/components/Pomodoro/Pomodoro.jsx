import React, { useState, useEffect } from 'react';

import { getPageVisibility } from '../../hooks/visibility';

import { formatCountdownTime } from '../../services/formatCountdownTime';
import { formatTime } from '../../services/formatTime';

import TimerProgress from './TimerProgress';

import './Pomodoro.css';

const studyDuration = 25 * 60;
const shortBreakDuration = 5 * 60;
const longBreakDuration = 15 * 60;

const pomoSequence = ["work", "shortBreak", "work", "shortBreak", "work", "longBreak"];

const durations =
{
    work: studyDuration,
    shortBreak: shortBreakDuration,
    longBreak: longBreakDuration
};

function Pomodoro() {
    const [ timeLeft, setTimeLeft ] = useState(studyDuration);
    const [ isRunning, setIsRunning ] = useState(false);
    const [ cycleStage, setCycleStage ] = useState(0);
    const [ percentage, setPercentage ] = useState(100);

    const isVisible = getPageVisibility();
    
    useEffect(() => {
        let intervalId;

        if (isVisible && isRunning) {
            intervalId = setInterval(() => {
                setTimeLeft((prevTime) => {
                    setPercentage(((prevTime - 1) / durations[pomoSequence[cycleStage]]) * 100);

                    if (prevTime > 0) return prevTime - 1;
                    else {
                        let nextStage;

                        if (pomoSequence > 6) {
                            pomoSequence.slice(0, 5);
                            nextStage = (cycleStage) % pomoSequence.length;
                        } else nextStage = (cycleStage + 1) % pomoSequence.length;

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
    }, [ isRunning, cycleStage, isVisible ]);

    const handleStartStop = () => setIsRunning((prev) => !prev);

    const handleModified = (mode) => {
        handleReset();

        pomoSequence.push(mode);

        setTimeLeft(durations[pomoSequence[pomoSequence.length - 1]]);
        setCycleStage(pomoSequence.length - 1);
    }

    const handleReset = () => {
        setIsRunning(false);
        setCycleStage(0);
        setTimeLeft(studyDuration);
        setPercentage(100);
    };

    return (
        <section className="timer-container">
            <div className="timer-interface">
                <TimerProgress percentage={ percentage } />
                <div className="timer">
                    <span className="end-time">{ formatTime(durations[pomoSequence[cycleStage]]) }</span>
                    <h1 id="time">{ formatCountdownTime(timeLeft) }</h1>
                    <button
                        onClick={() => handleStartStop()}
                        className="start-stop-button button"
                    >
                        { isRunning ? 'Stop' : 'Start' }
                    </button>
                    <button
                        onClick={ () => handleReset() }
                        className="reset-button button"
                    >Reset</button>
                </div>
                <div className="timer-modes">
                    <button
                        className={ pomoSequence[cycleStage] === 'work' ? 'active button' : 'button' }
                        onClick={ () => handleModified('work') }
                    >Pomodoro</button>
                    <button
                        className={ pomoSequence[cycleStage] === 'shortBreak' ? 'active button' : 'button' }
                        onClick={ () => handleModified('shortBreak') }
                    >Short Break</button>

                    <button
                        className={ pomoSequence[cycleStage] === 'longBreak' ? 'active button' : 'button' }
                        onClick={ () => handleModified('longBreak') }
                    >Long Break</button>
                </div>

            </div>
        </section>
    );
}

export default Pomodoro;