import moment from "moment";
import React, { useMemo, useState } from "react";
import CustomHexagonLayer from "components/hexagonLayer/CustomHexagonLayer";
import TimeRangeSlider from "components/TimeRangeSlider";
import { useCsvData } from "../hooks/useCsvData";
import PageHeader from "./PageHeader";

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
      <PageHeader />
      <TimeRangeSlider
        selectedDateRange={dateRange}
        dataSource={sampleData}
        setDateRange={setDateRange}
        xName="dateTime"
      />
      <CustomHexagonLayer data={filterData} />
    </div>
  );
};

export default Map;
