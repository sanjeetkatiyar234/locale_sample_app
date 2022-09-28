import moment from "moment";
import React, { useMemo, useState } from "react";
import CustomArcLayer from "../components/arcLayer/CustomArcLayer";
import TimeRangeSlider from "../components/TimeRangeSlider";
import useCsvData from "./hooks/useCsvData";

const ArcLayerPage = () => {
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
      <CustomArcLayer data={filterData} />
    </div>
  );
};

export default ArcLayerPage;
