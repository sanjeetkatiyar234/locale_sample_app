import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQueryHiveData } from "store/actions";
import useToast from "hooks/useToast";
import { queryHiveDataWithFilterTypeSelector } from "store/selectors";
import HexagonalLayerWithSlider from "./HexagonalLayerWithSlider";
import PageHeader from "./PageHeader";
import HomeRightSidePanel from "./HomeRightSidePanel";
import PageLoader from "layout/PageLoader";

const Home = () => {
  const sampleData = useSelector(queryHiveDataWithFilterTypeSelector);
  const filterTypeValue = useSelector((state) => state.filterType.value);
  const loading = useSelector((state) => state.app.loading?.global);
  const toast = useToast();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      ...fetchQueryHiveData(filterTypeValue),
      statusCodeMap: {
        success: () => toast.success("data loaded"),
        error: () => toast.error("failed data load"),
      },
    });
  }, [dispatch, filterTypeValue]);

  if (loading) return <PageLoader />;
  return (
    <div>
      <PageHeader />
      <HexagonalLayerWithSlider sampleData={sampleData} />
      {/* <HomeRightSidePanel /> */}
    </div>
  );
};

export default Home;
