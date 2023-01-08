import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useToast from "hooks/useToast";
import { fetchH3SampleData1 } from "./actions";

// const FIRST_DATA = {
//   start_time: "2022-01-03 00:00:00",
//   end_time: "2022-01-03 23:59:59",
// };

const normalizeRequest = (formValue = {}, viewFilterValue) => {
  const start_time =
    viewFilterValue === "daily"
      ? formValue.daily_start_date?.startOf("day").format("YYYY-MM-DD HH:mm:ss")
      : formValue.start_date?.startOf("day").format("YYYY-MM-DD HH:mm:ss");
  const end_time =
    viewFilterValue === "daily"
      ? formValue.daily_start_date?.endOf("day").format("YYYY-MM-DD HH:mm:ss")
      : formValue.end_date?.startOf("day").format("YYYY-MM-DD HH:mm:ss");
  return {
    start_time: start_time,
    end_time: end_time,
    view_type: viewFilterValue,
  };
};

const useInitializeOriginDestination = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const filterTypeValue = useSelector((state) => state.filterType.value);
  const formValue = useSelector(
    (state) => state.pages.originDestination.rightSidePanelForm.value
  );
  useEffect(() => {
    dispatch({
      ...fetchH3SampleData1({
        ...normalizeRequest(formValue, filterTypeValue),
      }),
      statusCodeMap: {
        success: () => toast.success("data loaded"),
        error: () => toast.error("failed data load"),
      },
    });
  }, [
    dispatch,
    filterTypeValue,
    formValue.daily_start_date,
    formValue.start_date,
    formValue.end_date,
  ]);
};

export default useInitializeOriginDestination;
