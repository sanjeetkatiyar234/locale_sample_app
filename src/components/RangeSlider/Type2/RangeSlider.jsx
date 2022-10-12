import React, { useEffect, useMemo, useReducer } from "react";
import { Skeleton } from "@mui/material";
import { useSelector } from "react-redux";
import RangeSliderWithPeriodSelector from "./RangeSliderWithPeriodSelector";
import RangeSliderWithoutPeriodSelector from "./RangeSliderWithoutPeriodSelector";

const RangeSlider = ({ dataSource = [], ...props }) => {
  const filterTypeValue = useSelector((state) => state.filterType.value);

  if (!dataSource.length) {
    return <Skeleton variant="rectangular" height={80} />;
  }

  return filterTypeValue === "intraDay" ? (
    <RangeSliderWithPeriodSelector dataSource={dataSource} {...props} />
  ) : (
    <RangeSliderWithoutPeriodSelector dataSource={dataSource} {...props} />
  );
};

export default RangeSlider;
