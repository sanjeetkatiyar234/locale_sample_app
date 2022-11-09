import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useToast from "hooks/useToast";
import { fetchH3SampleData } from "./actions";

const useInitializeOriginDestination = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      ...fetchH3SampleData(),
      statusCodeMap: {
        success: () => toast.success("data loaded"),
        error: () => toast.error("failed data load"),
      },
    });
  }, [dispatch]);
};

export default useInitializeOriginDestination;
