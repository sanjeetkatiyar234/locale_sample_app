import { csv } from "d3";
import moment from "moment";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import useToast from "hooks/useToast";

export const useH3CsvData = () => {
  const [sampleData, setSampleData] = useState([]);
  const filterTypeValue = useSelector((state) => state.filterType.value);
  const toast = useToast();
  useEffect(() => {
    csv("/data/sampleH3Data.csv", (row, id) => ({
      id,
      ...row,
      start: new Date(row["start"]),
      end: new Date(row["end"]),
      Count: +row["Count"],
    }))
      .then((rows) => rows.filter((d) => !!d.Hex))
      .then((data) => {
        if (data.length) {
          toast.success("Data Loaded");
        }
        setSampleData(data);
      });
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
