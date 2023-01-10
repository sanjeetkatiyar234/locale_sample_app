import moment from "moment";
// fisrt index data formate
// {
//     "type": "Feature",
//     "geometry": null,
//     "properties": {
//         "dateRanges": [
//             {
//                 "@id": 1,
//                 "name": "2021-01-20 to 2021-01-20",
//                 "from": "2021-01-20",
//                 "to": "2021-01-20",
//                 "exclusions": [],
//                 "excludedDaysOfWeek": []
//             }
//         ],
//         "timeSets": [
//             {
//                 "@id": 2,
//                 "name": "8:00-8:15",
//             },
//         ],

//     }
// }

export const getTimeRangeForSlider = (dateRanges, timeSets = []) => {
  const date = dateRanges?.[0]?.from || new Date();

  return timeSets.map((data) => {
    const startTime = data.name.split("-")[0];
    return {
      ...data,
      start_time: `${moment(date).format("YYYY-MM-DD")} ${startTime}:00`,
    };
  });
};

const getMedianSpeed = (values) => {
  const sorted = Array.from(values).sort(
    (a, b) => a?.medianSpeed - b?.medianSpeed
  );
  const middle = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1]?.medianSpeed + sorted[middle]?.medianSpeed) / 2;
  }

  return sorted[middle]?.medianSpeed;
};

export const filtergeoJsonData = (
  pathLayerData = [],
  dataSource = [],
  dateRanges = {}
) => {
  const { start, end } = dateRanges;
  const filterIds = dataSource
    .filter(
      (d) =>
        moment(d.start_time).isSameOrAfter(start) &&
        moment(d.start_time).isSameOrBefore(end)
    )
    .map((d) => d?.["@id"]);

  return pathLayerData;

  // return pathLayerData.map((data) => {
  //   const { segmentTimeResults, speedLimit, ...rest } = data.properties;
  //   const filterSegmentTimeResults = segmentTimeResults.filter((d) =>
  //     filterIds.includes(d.timeSet)
  //   );
  //   // const avg = filterSegmentTimeResults.reduce(
  //   //   (a, b) => a + b?.medianSpeed,
  //   //   0
  //   // );
  //   const median = getMedianSpeed(filterSegmentTimeResults);
  //   const tenPct = (speedLimit / 100) * 20;
  //   let color = [64, 64, 64];
  //   if (speedLimit < median) {
  //     color = [11, 102, 35];
  //   } else if (speedLimit > median && median > speedLimit - tenPct) {
  //     color = [255, 255, 0];
  //   } else if (median < speedLimit - tenPct) {
  //     color = [255, 0, 0];
  //   }
  //   if (median === 0) {
  //     color = [64, 64, 64];
  //   }
  //   console.log("harsh", median, speedLimit, speedLimit - tenPct);
  //   return {
  //     ...data,
  //     properties: {
  //       ...rest,
  //       median: median,
  //       color: color,
  //       segmentTimeResults: filterSegmentTimeResults,
  //     },
  //   };
  // });
};
