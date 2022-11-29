import React from "react";
import { Box, Breadcrumbs, Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import SubHeader from "layout/SubHeader";
import { resetFilterType } from "components/dropDown/filterTypeSlice";
import { resetPredictionLayerView } from "./actions";
import "./PageHeader.css";
import ToggleViewSwitch from "./ToggleViewSwitch";

const PageHeader = ({ checked, handleValueChecked }) => {
  const dispatch = useDispatch();
  const resetViewClick = () => {
    dispatch(resetPredictionLayerView());
    dispatch(resetFilterType());
  };
  return (
    <SubHeader>
      <Box className="pageHeader">
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <NavLink to="/prediction-layer">
            <Typography color="text.primary">Prediction Layer</Typography>
          </NavLink>
          {/* <NavLink to="/prediction-layer">
            <Typography color="text.primary">Sub Prediction Layer</Typography>
          </NavLink> */}
        </Breadcrumbs>
        <Box sx={{ display: "flex" }}>
          <Button sx={{ mr: 1 }} variant="outlined" onClick={resetViewClick}>
            Reset View
          </Button>
          <ToggleViewSwitch
            checked={checked}
            handleValueChecked={handleValueChecked}
          />
        </Box>
      </Box>
    </SubHeader>
  );
};

export default PageHeader;
