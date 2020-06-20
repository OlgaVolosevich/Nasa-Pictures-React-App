import React, { useState } from "react";
import "./App.scss";
import CalendarContainer from "./components/Calendar";

function App() {
  const [date, getDate] = useState(new Date().toLocaleDateString());
  return (
    <div className="App">
      <h1>Pick any date please</h1>
      <CalendarContainer getDate={getDate} />
      <h2>Picked date: {date}</h2>
    </div>
  );
}

export default App;
