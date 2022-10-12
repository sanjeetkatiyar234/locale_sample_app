import moment from "moment";
import React, { useMemo, useState } from "react";
import CustomH3HexagonLayer from "components/hexagonLayer/CustomH3HexagonLayer";
import TimeRangeSlider from "components/TimeRangeSlider";

const H3HexagonLayerWithSlider = ({ sampleData }) => {
  const [dateRange, setDateRange] = useState({});
  const { start, end } = dateRange;

  const filterData = useMemo(
    () =>
      sampleData.filter(
        (d) =>
          moment(d.start).isSameOrAfter(start) &&
          moment(d.end).isSameOrBefore(end)
      ),
    [sampleData, start, end]
  );
  return (
    <>
      <TimeRangeSlider
        selectedDateRange={dateRange}
        dataSource={sampleData}
        setDateRange={setDateRange}
        xName="start"
        yName="Count"
      />
      <CustomH3HexagonLayer data={filterData} />
    </>
  );
};

export default H3HexagonLayerWithSlider;
