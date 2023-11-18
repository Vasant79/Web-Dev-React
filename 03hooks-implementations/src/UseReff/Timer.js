import { useState, useRef } from "react";

/**
 *
 *  useState -- functionality -- for rendering on screen -- change cause re render
 *  useRef -- functionality -- storing refernce  -- change does not cause re render
 *
 * go through setInterval & clearInterval
 *
 */

function Timer() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);

  //useRef variable created
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    //clearing interval -- ensuring intervalRef == null
    clearInterval(intervalRef.current);

    //setting intervalRef to setInterval
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    console.log(intervalRef.current);

    //on stopping clearing it again
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}

export default Timer;
