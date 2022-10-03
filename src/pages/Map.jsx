import moment from "moment";
import React, { useMemo, useState } from "react";
import CustomH3HexagonLayer from "../components/hexagonLayer/CustomH3HexagonLayer";
import TimeRangeSlider from "../components/TimeRangeSlider";
// import { useCsvData } from "./hooks/useCsvData";
import { h3Data } from "../utils/h3CustomData";

const Map = () => {
  const [dateRange, setDateRange] = useState({});
  // const { sampleData } = [];
  const { start, end } = dateRange;
  const filterData = useMemo(
    () =>
    h3Data.filter(
        (d) =>
          moment(new Date(d.start)).isSameOrAfter(start) &&
          moment(new Date(d.end)).isSameOrBefore(end)
      ),
    [start, end]
  );
  console.log('filter data', filterData);
  return (
    <div>
      <TimeRangeSlider
        selectedDateRange={dateRange}
        dataSource={filterData}
        setDateRange={setDateRange}
      />

      <CustomH3HexagonLayer data={filterData} />
    </div>
  );
};

export default Map;
