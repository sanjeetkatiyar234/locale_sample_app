import React from "react";
import RangeSlider from "./RangeSlider/Type2/RangeSlider";
import "./TimeRangeSlider.css";

const TimeRangeSlider = ({ timeValue, setTimeValue }) => {
  return (
    <div className="container">
      <div className="rangeSelector">
        <RangeSlider />
      </div>
    </div>
  );
};

export default TimeRangeSlider;
