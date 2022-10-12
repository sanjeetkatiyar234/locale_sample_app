import moment from "moment";
import React, { useMemo, useState } from "react";
import CustomH3HexagonLayer from "../../components/hexagonLayer/CustomH3HexagonLayer";
import TimeRangeSlider from "../../components/TimeRangeSlider";
import { useH3CsvData } from "../hooks/useH3CsvData";
import PageHeader from "./PageHeader";

const Map = () => {
  const [dateRange, setDateRange] = useState({});
  const { sampleData } = useH3CsvData();
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
    <div>
      <PageHeader />
      <TimeRangeSlider
        selectedDateRange={dateRange}
        dataSource={sampleData}
        setDateRange={setDateRange}
        xName="start"
        yName="Count"
      />
      <CustomH3HexagonLayer data={filterData} />
    </div>
  );
};

export default Map;
