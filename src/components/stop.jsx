import React, { useState } from "react";



function Stopwatch() {
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
  return (
      <>
    
    <div className="stop-watch">
        <h1 className="headding">React Stopwatch</h1>
      <p className="timer" id="time">
        <span className="digits">
          {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
        </span>
        <span className="digits">
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
        </span>
        <span className="digits">
          {("0" + ((time / 10) % 100)).slice(-2)}
        </span>
      </p>
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
              <button className="btn btn-one btn-start" id="start" onClick={handleStart}>
                Start
              </button>
              <button className="btn-two"  id="reset" disabled={true}>
                Reset
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
    
    </>
  );
}

export default Stopwatch;