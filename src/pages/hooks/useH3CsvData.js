import { csv } from "d3";
import { useEffect, useState } from "react";

export const useH3CsvData = () => {
  const [sampleData, setSampleData] = useState([]);
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

  return { sampleData };
};
