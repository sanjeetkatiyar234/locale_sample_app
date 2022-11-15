import React from "react";
import ReactSlider from "react-slider";
import { Tooltip } from "@mui/material";
import "./RangeSlider.css";

//for reference only
const RangeSlider = () => {
  return (
    <ReactSlider
      className="horizontal-slider"
      thumbClassName="thumb"
      trackClassName="track"
      defaultValue={[0, 100]}
      allowSnapping={true}
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
  );
};

export default RangeSlider;
