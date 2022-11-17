import React from "react";
import { Box, Breadcrumbs, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import SubHeader from "layout/SubHeader";
import "./PageHeader.css";
import ToggleViewSwitch from "./ToggleViewSwitch";

const PageHeader = ({ checked, handleValueChecked }) => {
  return (
    <SubHeader>
      <Box className="pageHeader">
        <Breadcrumbs aria-label="breadcrumb">
          <NavLink to="/prediction-layer">
            <Typography color="text.primary">Prediction Layer</Typography>
          </NavLink>
          <NavLink to="/prediction-layer">
            <Typography color="text.primary">Sub Prediction Layer</Typography>
          </NavLink>
        </Breadcrumbs>
        <Box component="div">
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
