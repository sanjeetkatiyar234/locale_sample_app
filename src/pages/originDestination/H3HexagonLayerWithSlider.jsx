import moment from "moment";
import React, { useMemo, useState } from "react";
import CustomH3HexagonLayer from "components/hexagonLayer/CustomH3HexagonLayer";
import TimeRangeSlider from "components/TimeRangeSlider";
import { useSelector } from "react-redux";

const H3HexagonLayerWithSlider = ({ className, sampleData }) => {
  const [dateRange, setDateRange] = useState({});
  const { start, end } = dateRange;
  const { primaryColor, secondaryColor } =
    useSelector((state) => state.pages.originDestination.selectedColor) || {};
  const filterTypeValue = useSelector((state) => state.filterType.value);

  const filterData = useMemo(() => {
    const filterData = sampleData.filter(
      (d) =>
        moment(d.start_time).isSameOrAfter(start) &&
        moment(d.start_time).isSameOrBefore(end)
    );
    const dataMidlength = parseInt(filterData.length / 2);
    return filterData.map((data, index) => ({
      ...data,
      color: index <= dataMidlength ? primaryColor : secondaryColor,
    }));
  }, [sampleData, start, end, primaryColor, secondaryColor]);
  return (
    <div className={className}>
      <TimeRangeSlider
        filterTypeValue={filterTypeValue}
        selectedDateRange={dateRange}
        dataSource={sampleData}
        setDateRange={setDateRange}
        xName="start_time"
        yName="vehicle_count"
      />
      <CustomH3HexagonLayer data={filterData} />
    </div>
  );
};

export default H3HexagonLayerWithSlider;
