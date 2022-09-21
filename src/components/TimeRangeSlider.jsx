import React, { useState } from "react";
import RangeSlider from "react-bootstrap-range-slider";
import "./TimeRangeSlider.css";

const TimeRangeSlider = ({ timeValue, setTimeValue }) => {
  return (
    <div className="container">
      <label className="label">Select Time Range:</label>
      <RangeSlider
        value={timeValue}
        onChange={(e) => setTimeValue(e.target.value)}
        step={0.5}
        max={24}
        min={0}
        size="lg"
      />
    </div>
  );
};

export default TimeRangeSlider;
