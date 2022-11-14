import React,{ useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useToast from 'hooks/useToast';
import MapLayers from './MapLayers';
import PageHeader from './PageHeader';
// import {fetchPredictionLayerData} from './actions';
import { fetchQueryHiveData } from 'store/actions';
import { predictionLayerDataSelector } from './selectors';

const PredictionLayerPage = () => {
  const data = useSelector(predictionLayerDataSelector);
  const toast = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      ...fetchQueryHiveData(),
      statusCodeMap: {
        success: () => toast.success("data loaded"),
        error: () => toast.error("failed data load"),
      },
    });
  }, [dispatch]);

  return (
    <div>
        <PageHeader/>
        <MapLayers data={data} />
    </div>
  );
}

export default PredictionLayerPage;