import { csv } from "d3";
import moment from "moment";
import { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";

export const useCsvData = () => {
  const filterTypeValue = useSelector((state) => state.filterType.value);
  const [sampleData, setSampleData] = useState([]);
  useEffect(() => {
    csv("/data/query-hive.csv", (row, id) => ({
      id,
      ...row,
      dateTime: new Date(row["_c0"]),
      startPosition: [+row["first_lat"], +row["first_lon"]],
      endPosition: [+row["end_lat"], +row["end_lon"]],
    }))
      .then((rows) =>
        rows.filter(
          (d) =>
            d.startPosition[0] != null &&
            d.startPosition[1] != null &&
            d.endPosition[0] != null &&
            d.endPosition[1] != null &&
            d.start_hex
        )
      )
      .then(setSampleData);
  }, []);

  const filterSampleData = useMemo(() => {
    const todayDate = moment().subtract(9, "M");
    return filterTypeValue === "intraDay"
      ? sampleData.filter((d) => moment(d.dateTime).isSameOrAfter(todayDate))
      : sampleData;
  }, [filterTypeValue, sampleData]);

  return { sampleData: filterSampleData };
};
