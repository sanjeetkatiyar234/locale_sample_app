export const combineDuplicateDataVehicleCount = (data = []) => {
  return Object.values(
    data.reduce((accObj, current) => {
      const key = `${current.hex_id}${current.start_time}`;
      const alreadyPresent = accObj[key];
      if (alreadyPresent) {
        return {
          ...accObj,
          [key]: {
            ...alreadyPresent,
            vehicle_count: alreadyPresent.vehicle_count + current.vehicle_count,
          },
        };
      } else {
        return { ...accObj, [key]: current };
      }
    }, {})
  );
};
