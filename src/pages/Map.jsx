import React, { useState } from "react";
import CustomHexagonLayer from "../components/hexagonLayer/CustomHexagonLayer";
import TimeRangeSlider from "../components/TimeRangeSlider";

const Map = () => {
  const [timeValue, setTimeValue] = useState(0);
  return (
    <div>
      <TimeRangeSlider timeValue={timeValue} setTimeValue={setTimeValue} />
      <CustomHexagonLayer timeValue={timeValue} />
    </div>
  );
};

export default Map;
