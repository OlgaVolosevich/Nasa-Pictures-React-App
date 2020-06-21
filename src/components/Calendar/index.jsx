import React, { useState } from "react";
import "./calendar.scss";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarContainer = ({ getDate }) => {
  const chosenDate = sessionStorage.chosenDate
    ? new Date(Date.parse(sessionStorage.chosenDate))
    : new Date(new Date().getFullYear(), new Date().getMonth(), 1);
  if (
    chosenDate.getFullYear() === new Date().getFullYear() &&
    chosenDate.getMonth() === new Date().getMonth() &&
    chosenDate.getDate() === new Date().getDate()
  ) {
    delete sessionStorage.chosenDate;
  }
  const [date, setDate] = useState(chosenDate);
  const onChangeDate = (date) => {
    sessionStorage.chosenDate = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`;
    setDate(new Date(Date.parse(sessionStorage.chosenDate)));
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
