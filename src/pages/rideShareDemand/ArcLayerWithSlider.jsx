import moment from "moment";
import React, { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import CustomArcLayer from "components/arcLayer/CustomArcLayer";
import TimeRangeSlider from "components/TimeRangeSlider";

const ArcLayerWithSlider = ({ sampleData }) => {
  const [dateRange, setDateRange] = useState({});
  const { state } = useLocation();
  const { hexagonLayerData } = state || {};
  const arcData = useMemo(() => {
    if (hexagonLayerData?.points) {
      return hexagonLayerData.points.map((d) => d.source);
    } else return null;
  }, [hexagonLayerData]);

  const { start, end } = dateRange;

  const filterData = useMemo(
    () =>
      (arcData ?? sampleData).filter(
        (d) =>
          moment(d.dateTime).isSameOrAfter(start) &&
          moment(d.dateTime).isSameOrBefore(end)
      ),
    [arcData, sampleData, start, end]
  );

  return (
    <>
      <TimeRangeSlider
        selectedDateRange={dateRange}
        dataSource={arcData ?? sampleData}
        setDateRange={setDateRange}
        xName="dateTime"
      />
      <CustomArcLayer data={filterData} />
    </>
  );
};

export default ArcLayerWithSlider;
