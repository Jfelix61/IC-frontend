import React, { useState, useEffect } from "react";
import "./Countdown.scss";
import PropTypes from "prop-types";

const Countdown = ({ initialTimerTime, className }) => {
  const [timerTime, setTimerTime] = useState(initialTimerTime);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = timerTime - 1000;

      if (newTime >= 0) setTimerTime(newTime);
      else clearInterval(timer);
    }, 1000);

    return () => clearInterval(timer);
  }, [timerTime]);

  const seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
  const minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
  const hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2);

  return (
    <h1 className={"countdown " + className}>
      {hours}:{minutes}:{seconds}
    </h1>
  );
};

Countdown.propTypes = {
  initialTimerTime: PropTypes.number.isRequired,
  className: PropTypes.string
};

export default Countdown;