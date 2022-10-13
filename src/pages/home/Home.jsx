import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQueryHiveData } from "store/actions";
import useToast from "hooks/useToast";
import { queryHiveDataWithFilterTypeSelector } from "store/selectors";
import HexagonalLayerWithSlider from "./HexagonalLayerWithSlider";
import PageHeader from "./PageHeader";

const Home = () => {
  const sampleData = useSelector(queryHiveDataWithFilterTypeSelector);
  const toast = useToast();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!sampleData.length) {
      dispatch({
        ...fetchQueryHiveData(),
        statusCodeMap: {
          success: () => toast.success("data loaded"),
        },
      });
    }
  }, [dispatch, sampleData]);

  return (
    <div>
      <PageHeader />
      <HexagonalLayerWithSlider sampleData={sampleData} />
    </div>
  );
};

export default Home;
