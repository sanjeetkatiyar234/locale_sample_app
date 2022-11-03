import React,{Suspense} from "react";
import { useSelector } from "react-redux";
import { ColorRing } from "react-loader-spinner";
import RangeSliderWithPeriodSelector from "./RangeSliderWithPeriodSelector";
import RangeSliderWithoutPeriodSelector from "./RangeSliderWithoutPeriodSelector";

const RangeLoader=()=><ColorRing
visible={true}
height="80"
width="100%"
ariaLabel="blocks-loading"
wrapperStyle={{background:'rgba(0,0,0,0.5)'}}
wrapperClass="blocks-wrapper"
colors={['#FF0000', '#FF0000', '#FF0000', '#FF0000','#FF0000']}
/>;

const RangeSlider = ({ dataSource = [], ...props }) => {
  const filterTypeValue = useSelector((state) => state.filterType.value);

  if (!dataSource.length) {
    return <RangeLoader />;
  }

  return filterTypeValue === "intraDay" ? (
    <Suspense fallback={<RangeLoader />}>
 <RangeSliderWithPeriodSelector dataSource={dataSource} {...props} />
    </Suspense>
   
  ) : (
    <Suspense fallback={<RangeLoader />}>
    <RangeSliderWithoutPeriodSelector dataSource={dataSource} {...props} />
    </Suspense>
  );
};

export default RangeSlider;
