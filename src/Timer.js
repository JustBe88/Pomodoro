import './Timer.css';
import React, { useState, useEffect, useRef } from 'react';
import tickSound from './assets/tick.wav';
import { faPlay, faPause, faRedo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import oceanVideo from './assets/ocean_video.mp4';
import deskVideo from './assets/working_desk.mp4';
import deskPhoto from './assets/deskphoto.png'
const POMODORO_TIME = 25 * 60;
const BREAK_TIME = 5 * 60;

function Timer() {
    const [isActive, setIsActive] = useState(false);
    const tickAudio = useRef(new Audio(tickSound));
    const [isPomodoro, setIsPomodoro] = useState(true);
    const [currentSessionTime, setCurrentSessionTime] = useState(POMODORO_TIME);
    const [timeLeft, setTimeLeft] = useState(isPomodoro ? POMODORO_TIME : BREAK_TIME);
    const [theme, setTheme] = useState('chill');

    const toggleTimer = () => {
        setIsActive(!isActive);
    };

    const handleReset = () => {
        setIsActive(false);
        setIsPomodoro(true);
        setTimeLeft(POMODORO_TIME);
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
                        const nextSessionTime = isPomodoro ? BREAK_TIME : POMODORO_TIME;
                        setIsPomodoro(!isPomodoro);
                        setCurrentSessionTime(nextSessionTime);
                        return nextSessionTime;
                    }                    
                    return prevTime - 1;
                });
            }, 1000);
        } else {
            clearInterval(timer);
        }

        return () => clearInterval(timer);
    }, [isActive, isPomodoro]);
    
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainderSeconds = seconds % 60;
        return `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    }
    return (
        <div className={`timer-wrapper ${theme}`}>
            {theme === 'chill' && (
                <video autoPlay loop muted id="background-video">
                    <source src={deskVideo} type="video/mp4" />
                </video>
            )}
{theme === 'chill' ? (
    <video autoPlay loop muted id="background-video">
        <source src={deskVideo} type="video/mp4" />
    </video>
) : (
    <img src={deskPhoto} alt="Home Office Theme" id="background-image" />
)}

            <div className="timer-container">
            <div className="theme-selector">
                {/* <label>
                    <input 
                        type="radio" 
                        value="chill" 
                        checked={theme === 'chill'} 
                        onChange={(e) => setTheme(e.target.value)} 
                    />
                    Chill Theme
                </label> */}
                {/* <label>
                    <input 
                        type="radio" 
                        value="homeOffice" 
                        checked={theme === 'homeOffice'} 
                        onChange={(e) => setTheme(e.target.value)} 
                    />
                    Home Office
                </label> */}
            </div>              
                <div className="timer-text">{formatTime(timeLeft)}</div>
                <svg className="timer-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle className="timer-circle-backdrop" cx="50" cy="50" r="45"></circle>
                    <circle className="timer-circle-progress" cx="50" cy="50" r="45" 
                            strokeDasharray="283" 
                            strokeDashoffset={`${(1 - timeLeft / currentSessionTime) * 283}`}></circle>
                </svg>
                <div className="timer-controls">
                    <FontAwesomeIcon className="custom-icon" 
                        icon={isActive ? faPause : faPlay} 
                        size='2x'
                        onClick={toggleTimer}/>
                    <FontAwesomeIcon className="custom-icon"
                        icon={faRedo} 
                        size='2x'
                        onClick={handleReset}/>
                </div>
            </div>
        </div>
        
    );
            }    
export default Timer;
