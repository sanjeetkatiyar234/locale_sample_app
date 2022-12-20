export const groupRangeSelectorDataByHours = (data = []) => {
  let newData = {};

  for (const element of data) {
    const vehicle_count = +element.vehicle_count || 0;
    const date = new Date(element.start_time);
    const hours =
      date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const dateString = `${date.toISOString().split("T")[0]}T${hours}:00:00`;
    // const dateString = new Date(element.start_time).toLocaleString();

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
    const date = new Date(element.start_time).toISOString().split("T")[0];
    // const date = new Date(element.start_time).toLocaleDateString().toString();

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
