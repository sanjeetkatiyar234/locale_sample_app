import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { ColorRing } from "react-loader-spinner";
import RangeSliderWithPeriodSelector from "./RangeSliderWithPeriodSelector";
import RangeSliderWithoutPeriodSelector from "./RangeSliderWithoutPeriodSelector";
import {
  groupRangeSelectorDataByDaily,
  groupRangeSelectorDataByHours,
} from "./utils";

const RangeLoader = () => (
  <ColorRing
    visible={true}
    height="80"
    width="100%"
    ariaLabel="blocks-loading"
    wrapperStyle={{ background: "lightgray" }}
    wrapperClass="blocks-wrapper"
    colors={["#2b2828", "#2b2828", "#2b2828", "#2b2828", "#2b2828"]}
  />
);

const RangeSlider = ({ filterTypeValue, dataSource = [], ...props }) => {
  return filterTypeValue === "daily" ? (
    <Suspense fallback={<RangeLoader />}>
      <RangeSliderWithoutPeriodSelector
        dataSource={groupRangeSelectorDataByDaily(dataSource)}
        {...props}
      />
    </Suspense>
  ) : (
    <Suspense fallback={<RangeLoader />}>
      <RangeSliderWithPeriodSelector
        dataSource={groupRangeSelectorDataByHours(dataSource)}
        {...props}
      />
    </Suspense>
  );
};

export default RangeSlider;
