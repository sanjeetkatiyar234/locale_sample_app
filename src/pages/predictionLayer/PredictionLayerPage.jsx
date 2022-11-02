import React,{ useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useToast from 'hooks/useToast';
import CustomScatterplotLayer from './CustomScatterplotLayer';
import PageHeader from './PageHeader';
import {fetchPredictionLayerData} from './actions';

const PredictionLayerPage = () => {
  const data = useSelector(state => state.pages.predictionLayer.data);
  const toast = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch({
        ...fetchPredictionLayerData(),
        statusCodeMap: {
          success: () => toast.success("data loaded"),
          error: () => toast.error("failed data load"),
        },
      });
  }, [dispatch]);

  return (
    <div>
        <PageHeader/>
        <CustomScatterplotLayer data={data} />
    </div>
  );
}

export default PredictionLayerPage;