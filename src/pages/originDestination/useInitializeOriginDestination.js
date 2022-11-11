import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useToast from "hooks/useToast";
import {
  combineH3SampleData3,
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
  const data1 = useSelector(
    (state) => state.pages.originDestination.data.first
  );
  const data2 = useSelector(
    (state) => state.pages.originDestination.data.second
  );
  const data3 = useSelector(
    (state) => state.pages.originDestination.data.third
  );

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

  useEffect(() => {
    if (data1.length && data2.length & data3.length) {
      const combineData = [...data1, ...data2, ...data3];

      const filteredArr = Object.values(
        combineData.reduce((accObj, current) => {
          const key = `${current.hex_id}${current.start_time}`;
          const alreadyPresent = accObj[key];
          if (alreadyPresent) {
            return {
              ...accObj,
              [key]: {
                ...alreadyPresent,
                vehicle_count:
                  alreadyPresent.vehicle_count + current.vehicle_count,
              },
            };
          } else {
            return { ...accObj, [key]: current };
          }
        }, {})
      );
      if (filteredArr.length) {
        dispatch(combineH3SampleData3(filteredArr));
      }
    }
  }, [data1, data2, data3]);
};

export default useInitializeOriginDestination;
