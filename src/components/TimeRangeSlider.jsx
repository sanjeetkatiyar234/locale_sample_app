import { Tooltip } from "@mui/material";
import React from "react";
import ReactSlider from "react-slider";
import "./TimeRangeSlider.css";

const TimeRangeSlider = ({ timeValue, setTimeValue }) => {
  return (
    <div className="container">
      <div className="rangeSelector">
        {/* <p>
          <label className="label">Select Time Range:</label>
          <span>{` ${timeValue} hr`}</span>
        </p> */}
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="thumb"
          trackClassName="track"
          defaultValue={[0, 100]}
          ariaLabel={["Lower thumb", "Upper thumb"]}
          ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
          renderThumb={(props, state) => (
            <Tooltip {...props} title={state.valueNow} arrow>
              <div>{state.valueNow}</div>
            </Tooltip>
          )}
          pearling
          minDistance={10}
        />
      </div>
    </div>
  );
};

export default TimeRangeSlider;
