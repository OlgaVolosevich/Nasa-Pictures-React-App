import React, { useState } from "react";
import "./App.scss";
import CalendarContainer from "./components/Calendar";
import MediaContentContainer from "./components/MediaContentContainer/MediaContentContainer";

function App() {
  const [date, getDate] = useState(new Date().toLocaleDateString());
  return (
    <div className="App">
      <h1>Pick any date please</h1>
      <CalendarContainer getDate={getDate} />
      <h2>Picked date: {date}</h2>
      <MediaContentContainer date={date.split(".").reverse().join("-")} />
    </div>
  );
}

export default App;
