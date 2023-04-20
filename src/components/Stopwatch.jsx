import React, { useState } from 'react';

const Stopwatch = () => {
 
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);
   
    React.useEffect(() => {
        let interval = null;
    
        if (isActive && isPaused === false) {
          interval = setInterval(() => {
            setTime((time) => time + 10);
          }, 10);
        } else {
          clearInterval(interval);
        }
        return () => {
          clearInterval(interval);
        };
      }, [isActive, isPaused]);

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
      };
    
      const handlePauseResume = () => {
        setIsPaused(!isPaused);
      };
    
      const handleReset = () => {
        setIsActive(false);
        setTime(0);
      };

    const formattedTime = (time) => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        let hours = Math.floor(time / 3600);
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (hours < 10) {
            hours = "0" + hours;
        }
        cont();
        return `${hours}:${minutes}:${seconds}`;
    }
const cont=()=>{
    //console.log((time.textContent.split(' ').join('')));
    console.log(time)
}
    return (
        <div>
            <div data-testid="time">{formattedTime(time)}</div>
            {/* <p>{{time.textContent.split(‘ ‘).join(‘’)}}</p> */}
            <div className="Control-Buttons">
        <div>
          {isActive ? (
            <div className="btn-grp">
              <button className="btn btn-one" onClick={handlePauseResume}>
                {isPaused ? "Resume" : "Pause"}
              </button>
              <button className="btn btn-two" id="reset" onClick={handleReset}>
                Reset
              </button>
            </div>
          ) : (
            <div className="btn-grp">
              <button className="btn btn-one btn-start"  data-testid="start" id="start" onClick={handleStart}>
                Start
              </button>
              <button className="btn-two" data-testid="reset" id="reset" disabled={true}>
                Reset
              </button>
            </div>
          )}
        </div>
      </div>
        </div>
    );
}

export default Stopwatch;