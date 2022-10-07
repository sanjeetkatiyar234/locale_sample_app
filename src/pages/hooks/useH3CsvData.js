import { csv } from "d3";
import moment from "moment";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";

export const useH3CsvData = () => {
  const [sampleData, setSampleData] = useState([]);
  const filterTypeValue = useSelector((state) => state.filterType.value);
  useEffect(() => {
    csv("/data/sampleH3Data.csv", (row, id) => ({
      id,
      ...row,
      start: new Date(row["start"]),
      end: new Date(row["end"]),
      Count: +row["Count"],
    }))
      .then((rows) => rows.filter((d) => !!d.Hex))
      .then(setSampleData);
  }, []);

  const filterSampleData = useMemo(() => {
    const todayDate = moment().subtract(9, "M");
    return filterTypeValue === "intraDay"
      ? sampleData.filter(
          (d) =>
            moment(d.start).isSameOrAfter(todayDate) &&
            moment(d.end).isSameOrAfter(todayDate)
        )
      : sampleData;
  }, [filterTypeValue, sampleData]);

  return { sampleData: filterSampleData };
};
