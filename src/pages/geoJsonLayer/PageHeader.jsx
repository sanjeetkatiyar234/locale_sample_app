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
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { resetMapPosition } from "app/actions";

const PageHeader = () => {
  const dispatch = useDispatch();
  const onResetClick = () => {
    // dispatch(resetFilterType());
    // dispatch(resetMapPosition(true));
  };
  return (
    <SubHeader>
      <Box className="pageHeader">
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <NavLink to="/geojson-layer">
            <Typography color="text.primary">GeoJson Layer</Typography>
          </NavLink>
        </Breadcrumbs>
        <Box sx={{ display: "flex" }}>
          <Button
            sx={{ mr: 0.5, px: 1, minWidth: "auto" }}
            variant="outlined"
            onClick={onResetClick}
          >
            {/* Reset View */}
            <RestartAltIcon />
          </Button>
          {/* <FilterTypeDropDown /> */}
        </Box>
      </Box>
    </SubHeader>
  );
};

export default PageHeader;
