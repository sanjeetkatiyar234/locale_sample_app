import React from "react";
import {
  Box,
  Breadcrumbs,
  Button,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import SubHeader from "layout/SubHeader";
import FilterTypeDropDown from "components/dropDown/FilterTypeDropDown";
import { resetFilterType } from "components/dropDown/filterTypeSlice";
import "./PageHeader.css";
import { resetOriginDestinationView } from "./actions";

const PageHeader = () => {
  const dispatch = useDispatch();
  const resetViewClick = () => {
    dispatch(resetOriginDestinationView());
    dispatch(resetFilterType());
  };
  return (
    <SubHeader>
      <Box className="pageHeader">
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <NavLink to="/origin-destination">
            <Typography color="text.primary">Origin Destination</Typography>
          </NavLink>
          {/* <NavLink to="/origin-destination">
            <Typography color="text.primary">Sub Origin Destination</Typography>
          </NavLink> */}
        </Breadcrumbs>
        <Box sx={{ display: "flex" }}>
          <Button sx={{ mr: 1 }} variant="outlined" onClick={resetViewClick}>
            Reset View
          </Button>
          <FilterTypeDropDown />
        </Box>
      </Box>
    </SubHeader>
  );
};

export default PageHeader;
