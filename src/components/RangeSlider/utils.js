import moment from "moment";
export const groupRangeSelectorDataByHours = (data = []) => {
  let newData = {};

  for (const element of data) {
    const vehicle_count = +element.vehicle_count || 0;
    const dateString = `${moment(element.start_time).format(
      "YYYY-MM-DD HH"
    )}:00:00`;

    if (newData[dateString]) {
      newData[dateString] = newData[dateString] + vehicle_count;
    } else {
      newData[dateString] = vehicle_count;
    }
  }

  return Object.entries(newData)
    .map(([start_time, vehicle_count]) => ({
      start_time,
      vehicle_count,
    }))
    .sort((a, b) => new Date(a.start_time) - new Date(b.start_time));
};

export const groupRangeSelectorDataByDaily = (data = []) => {
  let newData = {};

  for (const element of data) {
    const vehicle_count = +element.vehicle_count || 0;
    const date = moment(element.start_time).format("YYYY-MM-DD");

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
    .sort((a, b) => moment(a.start_time) - moment(b.start_time));
};
