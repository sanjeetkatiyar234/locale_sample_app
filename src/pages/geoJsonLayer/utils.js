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
export const getTimeRangeForSlider = (obj) => {
  const date = obj.properties?.dateRanges?.[0]?.from || new Date();
  const timeSets = obj.properties?.timeSets || [];
  return timeSets.map((data) => {
    const startTime = data.name.split("-")[0];
    return {
      ...data,
      start_time: `${moment(date).format("YYYY-MM-DD")} ${startTime}:00`,
    };
  });
};

export const filtergeoJsonData = (
  featureGeoJsonData = [],
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

  return featureGeoJsonData.map((data) => {
    const { segmentTimeResults, speedLimit, ...rest } = data.properties;
    const filterSegmentTimeResults = segmentTimeResults.filter((d) =>
      filterIds.includes(d.timeSet)
    );
    const avg = filterSegmentTimeResults.reduce((a, b) => a + b?.medianSpeed, 0);
    let color = '';
    if (avg < speedLimit) {
      color = [255,0,0];
    } else {
      color = [255,255,0];
    }
    return {
      ...data,
      properties: { ...rest, avg:avg/filterSegmentTimeResults.length, color:color, segmentTimeResults: filterSegmentTimeResults },
    };
  });
};
