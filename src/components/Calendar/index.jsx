import React, { useState } from "react";
import "./calendar.scss";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarContainer = ({ getDate }) => {
  const [date, setDate] = useState(new Date());
  const onChangeDate = (date) => {
    setDate(date);
    getDate(date.toLocaleDateString());
  };

  return (
    <div className="calendar">
      <h1>Pick any date please</h1>
      <h2>Picked date: {date.toLocaleDateString()}</h2>
      <Calendar maxDate={new Date()} onChange={onChangeDate} value={date} />
    </div>
  );
};

export default CalendarContainer;
