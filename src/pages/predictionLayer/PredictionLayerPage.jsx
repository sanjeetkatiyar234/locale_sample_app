import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useToast from "hooks/useToast";
import PageLeftSidePanel from "layout/PageLeftSidePanel";
import MapLayers from "./MapLayers";
import PageHeader from "./PageHeader";
import { fetchPredictionLayerData, fetchGeoJsonLayerData } from "./actions";
import { fetchQueryHiveData } from "store/actions";
import { predictionLayerDataSelector } from "./selectors";
import PredictionLayerColorForm from "./PredictionLayerColorForm";
import PageLoader from "layout/PageLoader";

const PredictionLayerPage = () => {
  const [checked, setChecked] = React.useState(false);
  const loading = useSelector((state) => state.app.loading?.global);
  const data = useSelector(predictionLayerDataSelector);
  const geoJsonData = useSelector(
    (state) => state.pages.predictionLayer.geoJsonData
  );
  const toast = useToast();
  const dispatch = useDispatch();

  const handleValueChecked = (value) => setChecked(value);

  useEffect(() => {
    dispatch({
      ...fetchQueryHiveData(),
      statusCodeMap: {
        success: () => toast.success("hexagonal data loaded"),
        error: () => toast.error("failed data load"),
      },
    });

    dispatch({
      ...fetchGeoJsonLayerData(),
      statusCodeMap: {
        success: () => toast.success("Geojson data loaded"),
        error: () => toast.error("failed data load"),
      },
    });
  }, [dispatch]);

  if (loading) return <PageLoader />;
  return (
    <div>
      <PageHeader checked={checked} handleValueChecked={handleValueChecked} />
      <PageLeftSidePanel>
        <PredictionLayerColorForm />
      </PageLeftSidePanel>
      <MapLayers data={data} geoJsonData={geoJsonData} toggleView={checked} />
    </div>
  );
};

export default PredictionLayerPage;
