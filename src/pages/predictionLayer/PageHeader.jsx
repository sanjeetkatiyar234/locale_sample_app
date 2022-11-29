import React from "react";
import { Box, Breadcrumbs, Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SubHeader from "layout/SubHeader";
import { resetFilterType } from "components/dropDown/filterTypeSlice";
import {
  changeToggleView,
  resetPredictionLayerView,
  resetToggleView,
} from "./actions";
import "./PageHeader.css";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import ToggleViewSwitch from "./ToggleViewSwitch";
import { resetMapPosition } from "app/actions";

const PageHeader = ({ toggleView }) => {
  const dispatch = useDispatch();
  const resetViewClick = () => {
    dispatch(resetPredictionLayerView());
    dispatch(resetFilterType());
    dispatch(resetToggleView());
    dispatch(resetMapPosition(true));
  };
  const handleValueChecked = (value) => {
    dispatch(changeToggleView(value));
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
          <Button
            sx={{ mr: 0.5, px: 1, minWidth: "auto" }}
            variant="outlined"
            onClick={resetViewClick}
          >
            {/* Reset View */}
            <RestartAltIcon />
          </Button>
          <ToggleViewSwitch
            checked={toggleView}
            handleValueChecked={handleValueChecked}
          />
        </Box>
      </Box>
    </SubHeader>
  );
};

export default PageHeader;
