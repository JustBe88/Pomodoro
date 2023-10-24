import './Timer.css';
import React, { useState, useEffect, useRef } from 'react';
import tickSound from './tick.wav';

function Timer() {
    const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
    const [isActive, setIsActive] = useState(false);
    const tickAudio = useRef(new Audio(tickSound));

    const toggleTimer = () => {
        setIsActive(!isActive);
    };

    const handleReset = () => {
        setIsActive(false);
        setTimeLeft(25 * 60);
    };

    useEffect(() => {
        let timer;
        if (isActive) {
            timer = setInterval(() => {
                setTimeLeft(prevTime => {
                    if (prevTime <= 3 && prevTime > 0) {
                        tickAudio.current.play();
                    }
                    if (prevTime <= 0) {
                        clearInterval(timer);
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        } else {
            clearInterval(timer);
        }
    
        return () => clearInterval(timer);
    }, [isActive]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainderSeconds = seconds % 60;
        return `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    };

    return (
        <div className="timer-container">
            <div className="timer-text">{formatTime(timeLeft)}</div>
            <svg className="timer-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle className="timer-circle-backdrop" cx="50" cy="50" r="45"></circle>
                <circle className="timer-circle-progress" cx="50" cy="50" r="45" 
                        strokeDasharray="283" 
                        strokeDashoffset={`${(1 - timeLeft / (25 * 60)) * 283}`}></circle>
            </svg>
            <div className="timer-controls">
                <button onClick={toggleTimer}>{isActive ? 'Pause' : 'Start'}</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );    
}

export default Timer;
