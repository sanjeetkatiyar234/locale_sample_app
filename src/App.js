import React, { useState } from "react";
import CustomHexagonLayer from "./components/hexagonLayer/CustomHexagonLayer";
import TimeRangeSlider from "./components/TimeRangeSlider";
import "./App.css";

function App() {
  const [timeValue, setTimeValue] = useState(0);
  return (
    <div className="app">
      <div className="header">
        <h3>HexagonLayer Sample</h3>
        <TimeRangeSlider timeValue={timeValue} setTimeValue={setTimeValue} />
      </div>
      <div className="hexagonLayer">
        <CustomHexagonLayer timeValue={timeValue} />
      </div>
    </div>
  );
}

export default App;
