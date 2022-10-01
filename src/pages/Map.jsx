import moment from "moment";
import React, { useMemo, useState } from "react";
import CustomH3HexagonLayer from "../components/hexagonLayer/CustomH3HexagonLayer";
import TimeRangeSlider from "../components/TimeRangeSlider";
import { useCsvData } from "./hooks/useCsvData";

const Map = () => {
  const [dateRange, setDateRange] = useState({});
  const { sampleData } = useCsvData();
  const { start, end } = dateRange;

  const filterData = useMemo(
    () =>
      sampleData.filter(
        (d) =>
          moment(d.dateTime).isSameOrAfter(start) &&
          moment(d.dateTime).isSameOrBefore(end)
      ),
    [sampleData, start, end]
  );

  return (
    <div>
      <TimeRangeSlider
        selectedDateRange={dateRange}
        dataSource={sampleData}
        setDateRange={setDateRange}
      />

      <CustomH3HexagonLayer data={filterData} />
    </div>
  );
};

export default Map;
