import moment from "moment";
import React, { useMemo, useState } from "react";
import CustomH3HexagonLayer from "components/hexagonLayer/CustomH3HexagonLayer";
import TimeRangeSlider from "components/TimeRangeSlider";
import { useSelector } from "react-redux";

const H3HexagonLayerWithSlider = ({ sampleData }) => {
  const [dateRange, setDateRange] = useState({});
  const { start, end } = dateRange;
  const { primaryColor, secondaryColor } =
    useSelector((state) => state.pages.originDestination.selectedColor) || {};

  const filterData = useMemo(() => {
    const filterData = sampleData.filter(
      (d) =>
        moment(d.starttime).isSameOrAfter(start) &&
        moment(d.endtime).isSameOrBefore(end)
    );
    const dataMidlength = parseInt(filterData.length / 2);
    return filterData.map((data) => ({
      ...data,
      color: data.id <= dataMidlength ? primaryColor : secondaryColor,
    }));
  }, [sampleData, start, end, primaryColor, secondaryColor]);
  return (
    <>
      <TimeRangeSlider
        selectedDateRange={dateRange}
        dataSource={sampleData}
        setDateRange={setDateRange}
        xName="starttime"
        yName="vehicle_count"
      />
      <CustomH3HexagonLayer data={filterData} />
    </>
  );
};

export default H3HexagonLayerWithSlider;
