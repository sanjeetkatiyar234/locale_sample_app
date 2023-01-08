const getFetchDataTimeValue = (filterTypeValue, filterFormValue) => {
  let selectedDate = "";
  if (filterTypeValue === "daily") {
    selectedDate = `${filterFormValue.daily_start_date?.format("YYYY-MM-DD")}`;
  } else {
    selectedDate = `${filterFormValue.start_date.format(
      "YYYY-MM-DD"
    )} to ${filterFormValue.end_date.format("YYYY-MM-DD")}`;
  }
  return selectedDate;
};

export default getFetchDataTimeValue;
