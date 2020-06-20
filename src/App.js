import React, { useState } from "react";
import "./App.scss";
import CalendarContainer from "./components/Calendar";
import MediaContentContainer from "./components/MediaContentContainer/MediaContentContainer";

function App() {
  const [date, getDate] = useState(new Date().toLocaleDateString());
  return (
    <div className="App">
      <CalendarContainer getDate={getDate} />
      <MediaContentContainer date={date.split(".").reverse().join("-")} />
    </div>
  );
}

export default App;
