import React, { useEffect, useMemo, useState } from "react";
import moment from "moment";
import TimeRangeSlider from "components/TimeRangeSlider";
import CustomHexagonLayer from "components/hexagonLayer/CustomHexagonLayer";

const HexagonalLayerWithSlider = ({ className, sampleData }) => {
  const [dateRange, setDateRange] = useState({});
  const { start, end } = dateRange;
  const filterData = useMemo(
    () =>
      sampleData.filter(
        (d) =>
          moment(d.start_time).isSameOrAfter(start) &&
          moment(d.start_time).isSameOrBefore(end)
      ),
    [sampleData, start, end]
  );
  return (
    <div className={className}>
      <TimeRangeSlider
        selectedDateRange={dateRange}
        dataSource={sampleData}
        setDateRange={setDateRange}
        xName="start_time"
      />
      <CustomHexagonLayer data={filterData} />
    </div>
  );
};

export default HexagonalLayerWithSlider;
