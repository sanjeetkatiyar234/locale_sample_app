import React from "react";
import RangeSlider from "./RangeSlider/Type2/RangeSlider";
import "./TimeRangeSlider.css";

const TimeRangeSlider = (props) => {
  return (
    <div className="container">
      <div className="rangeSelector">
        <RangeSlider {...props} />
      </div>
    </div>
  );
};

export default TimeRangeSlider;
