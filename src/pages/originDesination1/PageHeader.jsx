import React from "react";
import {
  Box,
  Breadcrumbs,
  Button,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import SubHeader from "layout/SubHeader";
import FilterTypeDropDown from "components/dropDown/FilterTypeDropDown";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import "./PageHeader.css";
import { resetFilterType } from "components/dropDown/filterTypeSlice";

const PageHeader = () => {
  const dispatch = useDispatch();
  const resetView = () => {
    dispatch(resetFilterType());
  };

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
          <Button sx={{ mr: 0.5, px: 1, minWidth: 'auto' }} variant="outlined">
            {/* Reset View */}
            <RestartAltIcon />
          </Button>
          <FilterTypeDropDown />
        </Box>
      </Box>
    </SubHeader>
  );
};

export default PageHeader;
