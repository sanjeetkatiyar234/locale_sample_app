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
import "./PageHeader.css";

const PageHeader = () => {
  return (
    <SubHeader>
      <Box className="pageHeader">
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <NavLink to="/">
            <Typography color="text.primary">Home</Typography>
          </NavLink>
          {/* <NavLink to="/">
            <Typography color="text.primary">Sub Home</Typography>
          </NavLink> */}
        </Breadcrumbs>
        <Box sx={{ display: "flex" }}>
          <Button sx={{ mr: 1 }} variant="outlined">
            Reset View
          </Button>
          <FilterTypeDropDown />
        </Box>
      </Box>
    </SubHeader>
  );
};

export default PageHeader;
