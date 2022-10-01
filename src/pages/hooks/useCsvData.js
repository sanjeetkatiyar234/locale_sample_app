import { csv } from "d3";
import { useEffect, useState } from "react";

export const useCsvData = () => {
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

  return { sampleData };
};
