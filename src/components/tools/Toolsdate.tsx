import React, { useEffect, useState } from "react";

const Toolsdate = () => {
  const [time, setTime] = useState("");
  const [amPm, setAmPm] = useState("");
  const [greeting, setGreeting] = useState("");
  const [day, setDay] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateClockDisplay = (currentTime: Date) => {
      const options: Intl.DateTimeFormatOptions = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      };

      const userLocale = navigator.language || "en-US";
      const formattedTime = new Intl.DateTimeFormat(userLocale, options).format(
        currentTime
      );

      // Extract AM/PM indicator separately
      const amPm = formattedTime.slice(-2);
      const timeWithoutAmPm = formattedTime.slice(0, -2);

      setTime(timeWithoutAmPm);
      setAmPm(amPm);
    };

    const updateGreeting = (currentTime: Date) => {
      const currentHour = currentTime.getHours();
      let greetingMessage;

      if (currentHour >= 5 && currentHour < 12) {
        greetingMessage = "Good Morning";
      } else if (currentHour >= 12 && currentHour < 18) {
        greetingMessage = "Good Afternoon";
      } else if (currentHour >= 18 && currentHour < 24) {
        greetingMessage = "Good Evening";
      } else {
        greetingMessage = "Good Night";
      }

      setGreeting(greetingMessage);
    };

    const updateDate = (currentTime: Date) => {
      const optionsDateDay: Intl.DateTimeFormatOptions = {
        weekday: "long",
      };
      const optionsDateDate: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const formattedDateDay = new Intl.DateTimeFormat(
        navigator.language || "en-US",
        optionsDateDay
      ).format(currentTime);
      const formattedDateDate = new Intl.DateTimeFormat(
        navigator.language || "en-US",
        optionsDateDate
      ).format(currentTime);

      setDay(formattedDateDay);
      setDate(formattedDateDate);
    };

    const updateDaysCounter = () => {
      const currentDate = new Date();
      // Add your days calculation logic here
      // const daysSinceOct12_1997Count = daysSinceOct12_1997(currentDate);
      // document.getElementById("daysCounter").textContent = `. #${daysSinceOct12_1997Count}`;
    };

    const updateAll = () => {
      const currentTime = new Date();
      updateClockDisplay(currentTime);
      updateGreeting(currentTime);
      updateDate(currentTime);
      updateDaysCounter(); // Update the days counter every second
    };

    const intervalId = setInterval(updateAll, 1000);

    // Initial update
    updateAll();

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="datecard dbox">
        <div className="color-primary text-xs" id="greeting">
          {greeting}
        </div>
        <div className="time flex justify-center text-3xl py-5 font-thin">
          <div id="time">{time}</div>
          <div id="amPm">{amPm}</div>
        </div>
        <div id="DATE_IN_NEPALI"></div>
        <div id="date">
          <div id="date-day">{day}</div>
          <div id="date-date">{date}</div>
        </div>
      </div>
    </div>
  );
};

export default Toolsdate;
