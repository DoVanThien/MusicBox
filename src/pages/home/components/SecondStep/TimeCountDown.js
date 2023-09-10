import React from "react";
import Countdown from "react-countdown";

export default function TimeCountDown() {
  const Completionist = () => <span>OO:OO</span>;

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <span>
          {minutes}:{seconds}
        </span>
      );
    }
  };
  return <Countdown date={Date.now() + 1000000} renderer={renderer} />;
}
