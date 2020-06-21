import React, { useState } from "react";
import "./App.scss";
import CalendarContainer from "./components/Calendar";
import MediaContentContainer from "./components/MediaContentContainer/MediaContentContainer";

function App() {
  const chosenDate = sessionStorage.chosenDate
    ? new Date(Date.parse(sessionStorage.chosenDate)).toLocaleDateString()
    : new Date(new Date().getFullYear(), new Date().getMonth(), 1).toLocaleDateString();
  const [date, getDate] = useState(chosenDate);
  return (
    <div className="App">
      <CalendarContainer getDate={getDate} />
      <MediaContentContainer date={date.split(".").reverse().join("-")} />
    </div>
  );
}

export default App;
