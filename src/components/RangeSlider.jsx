import React from "react";
import "./RangeSlider.css";

const RangeSlider = (props) => {
  return (
    <div className="rangeSlider">
      <input type="range" {...props} />
    </div>
  );
};

export default RangeSlider;
