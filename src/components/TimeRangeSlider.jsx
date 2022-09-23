import React from "react";
import RangeSlider from "./RangeSlider";
import "./TimeRangeSlider.css";

const TimeRangeSlider = ({ timeValue, setTimeValue }) => {
  return (
    <div className="container">
      <div className="rangeSelector">
        <p>
          <label className="label">Select Time Range:</label>
          <span>{` ${timeValue} hr`}</span>
        </p>
        <RangeSlider
          value={timeValue}
          onChange={(e) => setTimeValue(e.target.value)}
          step={0.5}
          max={24}
          min={0}
        />
      </div>
    </div>
  );
};

export default TimeRangeSlider;
