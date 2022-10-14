import React from "react";
import { useSelector } from "react-redux";
import { ColorRing } from "react-loader-spinner";
import RangeSliderWithPeriodSelector from "./RangeSliderWithPeriodSelector";
import RangeSliderWithoutPeriodSelector from "./RangeSliderWithoutPeriodSelector";


const RangeSlider = ({ dataSource = [], ...props }) => {
  const filterTypeValue = useSelector((state) => state.filterType.value);

  if (!dataSource.length) {
    return <ColorRing
    visible={true}
    height="80"
    width="100%"
    ariaLabel="blocks-loading"
    wrapperStyle={{background:'lightgray'}}
    wrapperClass="blocks-wrapper"
    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />;
  }

  return filterTypeValue === "intraDay" ? (
    <RangeSliderWithPeriodSelector dataSource={dataSource} {...props} />
  ) : (
    <RangeSliderWithoutPeriodSelector dataSource={dataSource} {...props} />
  );
};

export default RangeSlider;
