import Image from "next/image";
import React from "react";

const Timertag = () => {
  return (
    <div className="timeClockParent">
      <div className="timeClock">
        <Image
          className="timerIcon"
          alt=""
          src="/icon/timer.svg"
          width={100}
          height={100}
        />
        <p className="min">10 MINS</p>
      </div>
      <div className="ad-box">
        <p className="ad">Ad</p>
      </div>
    </div>
  );
};

export default Timertag;
