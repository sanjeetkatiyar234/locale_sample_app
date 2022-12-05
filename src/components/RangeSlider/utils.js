import moment from "moment";
export const groupRangeSelectorDataByHours = (data = []) => {};

export const groupRangeSelectorDataByDaily = (data = []) => {
  let newData = {};

  for (const element of data) {
    const vehicle_count = +element.vehicle_count || 0;
    const date = new Date(element.start_time).toISOString().split("T")[0];
    if (newData[date]) {
      newData[date] = newData[date] + vehicle_count;
    } else {
      newData[date] = vehicle_count;
    }
  }

  return Object.entries(newData)
    .map(([start_time, vehicle_count]) => ({
      start_time,
      vehicle_count,
    }))
    .sort((a, b) => new Date(a.start_time) - new Date(b.start_time));
};
