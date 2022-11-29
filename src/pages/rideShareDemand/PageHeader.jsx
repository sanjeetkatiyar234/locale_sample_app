import React from "react";
import {
  Box,
  Breadcrumbs,
  Button,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import SubHeader from "layout/SubHeader";
import FilterTypeDropDown from "components/dropDown/FilterTypeDropDown";
import { resetFilterType } from "components/dropDown/filterTypeSlice";
import "./PageHeader.css";
import { useDispatch } from "react-redux";

const PageHeader = () => {
  const dispatch = useDispatch();
  const onResetClick = () => {
    dispatch(resetFilterType());
  };
  return (
    <SubHeader>
      <Box className="pageHeader">
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <NavLink to="/ride-share-demand">
            <Typography color="text.primary">Ride Share Demand</Typography>
          </NavLink>
          {/* <NavLink to="/ride-share-demand">
            <Typography color="text.primary">Sub Ride Share Demand</Typography>
          </NavLink> */}
        </Breadcrumbs>
        <Box sx={{ display: "flex" }}>
          <Button sx={{ mr: 1 }} variant="outlined" onClick={onResetClick}>
            Reset View
          </Button>
          <FilterTypeDropDown />
        </Box>
      </Box>
    </SubHeader>
  );
};

export default PageHeader;
