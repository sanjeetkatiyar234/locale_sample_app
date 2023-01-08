import moment from "moment";
import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import CustomArcLayer from "pages/rideShareDemand/arcLayer/CustomArcLayer";
import TimeRangeSlider from "components/TimeRangeSlider";

const ArcLayerWithSlider = ({ sampleData }) => {
  // const [dateRange, setDateRange] = useState({});
  const { state } = useLocation();
  const { hexagonLayerData } = state || {};
  // const filterTypeValue = useSelector((state) => state.filterType.value);
  const arcData = useMemo(() => {
    if (hexagonLayerData?.points) {
      return hexagonLayerData.points.map((d) => d.source);
    } else return null;
  }, [hexagonLayerData]);

  // const { start, end } = dateRange;

  // const filterData = useMemo(
  //   () =>
  //     (arcData ?? sampleData).filter(
  //       (d) =>
  //         moment(d.start_time).isSameOrAfter(start) &&
  //         moment(d.start_time).isSameOrBefore(end)
  //     ),
  //   [arcData, sampleData, start, end]
  // );

  return (
    <div style={{ position: "relative", flex: 1 }}>
      {/* <TimeRangeSlider
        filterTypeValue={filterTypeValue}
        selectedDateRange={dateRange}
        dataSource={arcData ?? sampleData}
        setDateRange={setDateRange}
        xName="start_time"
        intervalType = "Hours"
        interval={1}
      /> */}
      <CustomArcLayer data={arcData ?? sampleData} />
    </div>
  );
};

export default ArcLayerWithSlider;
