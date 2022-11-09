import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useToast from "hooks/useToast";
import {
  fetchH3SampleData1,
  fetchH3SampleData2,
  fetchH3SampleData3,
} from "./actions";

const FIRST_DATA =
  "?start_time=2022-01-1 00:00:00&end_time=2022-01-10 00:00:00";
const SECOND_DATA =
  "?start_time=2022-01-11 00:00:00&end_time=2022-01-20 00:00:00";
const THIRD_DATA =
  "?start_time=2022-01-21 00:00:00&end_time=2022-01-30 00:00:00";

const useInitializeOriginDestination = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      ...fetchH3SampleData1(FIRST_DATA),
      statusCodeMap: {
        success: () => toast.success("1st data loaded"),
        error: () => toast.error("failed 1st data load"),
      },
    });
    dispatch({
      ...fetchH3SampleData2(SECOND_DATA),
      statusCodeMap: {
        success: () => toast.success("2nd data loaded"),
        error: () => toast.error("failed 2nd data load"),
      },
    });
    dispatch({
      ...fetchH3SampleData3(THIRD_DATA),
      statusCodeMap: {
        success: () => toast.success("data 3rd loaded"),
        error: () => toast.error("failed 3rd data load"),
      },
    });
  }, [dispatch]);
};

export default useInitializeOriginDestination;
