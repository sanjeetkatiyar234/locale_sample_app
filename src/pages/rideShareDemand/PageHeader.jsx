import React from "react";
import { Box, Breadcrumbs, Link as MuiLink, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import SubHeader from "layout/SubHeader";
import FilterTypeDropDown from "components/dropDown/FilterTypeDropDown";
import "./PageHeader.css";

const PageHeader = () => {
  return (
    <SubHeader>
      <Box className="pageHeader">
        <Breadcrumbs aria-label="breadcrumb">
          <NavLink to="/ride-share-demand">
            <Typography color="text.primary">Ride Share Demand</Typography>
          </NavLink>
          <NavLink to="/ride-share-demand">
            <Typography color="text.primary">Sub Ride Share Demand</Typography>
          </NavLink>
        </Breadcrumbs>
        <Box component="div">
          <FilterTypeDropDown />
        </Box>
      </Box>
    </SubHeader>
  );
};

export default PageHeader;
