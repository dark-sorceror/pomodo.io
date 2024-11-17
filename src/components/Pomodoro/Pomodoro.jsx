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
                        onClick={ () => handleStartStop() }
                        className="start-stop-button button"
                    >
                        { isRunning ? 'Stop' : 'Start' }
                    </button>
                    <button
                        onClick={ () => handleReset() }
                        className="reset-button"
                    ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-refresh-ccw"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" /><path d="M16 16h5v5" /></svg></button>
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