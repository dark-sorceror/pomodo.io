import React, { useState, useEffect } from 'react';
import TimerProgress from './TimerProgress';
import { useTheme } from './ThemeMode';

function Pomodoro() {
    const studyDuration = 25 * 60;
    const shortBreakDuration = 5 * 60;
    const longBreakDuration = 15 * 60;

    const [ timeLeft, setTimeLeft ] = useState(studyDuration);
    const [ isRunning, setIsRunning ] = useState(false);
    const [ cycleStage, setCycleStage ] = useState(0);
    const [ percentage, setPercentage ] = useState(100);

    const { themeMode } = useTheme();

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
                    <button onClick={handleStartStop} className="start-stop-button button" style={{backgroundColor: themeMode ? 'rgb(160, 76, 255)' : '#69db4d', boxShadow: themeMode ? '0 7px 0px rgb(120, 57, 192)': '0 7px 0px rgb(91, 196, 65)'}}>
                        {isRunning ? 'Stop' : 'Start'}
                    </button>
                    <button onClick={handleReset} className="reset-button button"
                     style={{backgroundColor: themeMode ? 'rgb(160, 76, 255)' : 'rgb(105, 219, 77)',
                      boxShadow: themeMode ? '0 7px 0px rgb(120, 57, 192)': '0 7px 0px rgb(91, 196, 65)'}}>Reset</button>
                </div>
                <div className="timer-modes">
                    <button className={stages[cycleStage].type === 'work' ? 'active button' : 'button'}
                        style={{
                            backgroundColor: stages[cycleStage].type === 'work' 
                                ? (themeMode ? 'rgb(141, 82, 209)' : '#7bd964') 
                                : (themeMode ? 'rgb(241, 184, 255)' : 'rgb(190,224,182)'),
                            boxShadow: stages[cycleStage].type === 'work' 
                                ? (themeMode ? '0 7px 0px rgba(128, 60, 206)' : '0 7px 0px rgb(91, 196, 65)') 
                                : (themeMode ? '0 7px 0px rgb(169, 129, 179)' : '0 7px 0px rgb(135, 219, 114)')
                        }}>Pomodoro</button>
                        
                    <button className={stages[cycleStage].type === 'shortBreak' ? 'active button' : 'button'}
                        style={{
                            backgroundColor: stages[cycleStage].type === 'shortBreak' 
                                ? (themeMode ? 'rgb(141, 82, 209)' : '#7bd964') 
                                : (themeMode ? 'rgb(241, 184, 255)' : 'rgb(190,224,182)'),
                            boxShadow: stages[cycleStage].type === 'shortBreak' 
                                ? (themeMode ? '0 7px 0px rgba(128, 60, 206)' : '0 7px 0px rgb(91, 196, 65)') 
                                : (themeMode ? '0 7px 0px rgb(169, 129, 179)' : '0 7px 0px rgb(135, 219, 114)')
                        }}>Short Break</button>
                        
                    <button className={stages[cycleStage].type === 'longBreak' ? 'active button' : 'button'}
                        style={{
                            backgroundColor: stages[cycleStage].type === 'longBreak' 
                                ? (themeMode ? 'rgb(141, 82, 209)' : '#7bd964') 
                                : (themeMode ? 'rgb(241, 184, 255)' : 'rgb(190,224,182)'),
                            boxShadow: stages[cycleStage].type === 'longBreak' 
                                ? (themeMode ? '0 7px 0px rgba(128, 60, 206)' : '0 7px 0px rgb(91, 196, 65)') 
                                : (themeMode ? '0 7px 0px rgb(169, 129, 179)' : '0 7px 0px rgb(135, 219, 114)')
                        }}>Long Break</button>
                </div>

            </div>
        </section>
    );
}

export default Pomodoro;
