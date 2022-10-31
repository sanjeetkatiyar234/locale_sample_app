import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQueryHiveData } from "store/actions";
import useToast from "hooks/useToast";
import { queryHiveDataWithFilterTypeSelector } from "store/selectors";
import { useLocation } from 'react-router-dom';
import PageHeader from "./PageHeader";
import ArcLayerWithSlider from "./ArcLayerWithSlider";
import { fetchH3ToArcLayerData } from "./actions";

const ArcLayerPage = () => {
  const sampleData = useSelector(queryHiveDataWithFilterTypeSelector);
  const toast = useToast();
  const dispatch = useDispatch();
  const {search} = useLocation();
 
  useEffect(() => {
    const action=search?fetchH3ToArcLayerData(search):fetchQueryHiveData();
      dispatch({
        ...action ,
        statusCodeMap: {
          success: () => toast.success("data loaded"),
          error: () => toast.error("failed data load"),
        },
      });
  }, [dispatch,search]);

  return (
    <div>
      <PageHeader />
      <ArcLayerWithSlider sampleData={sampleData} />
    </div>
  );
};

export default ArcLayerPage;
