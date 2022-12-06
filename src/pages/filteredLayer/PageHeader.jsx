import React from "react";
import { Box, Breadcrumbs, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
// customs imports
import SubHeader from "layout/SubHeader";
import { resetMapPosition } from "app/actions";
import "./PageHeader.css";

const PageHeader = () => {
  const dispatch = useDispatch();
  const resetViewClick = () => {
    // dispatch(resetOriginDestinationView());
    // dispatch(resetFilterType());
    dispatch(resetMapPosition(true));
  };
  return (
    <SubHeader>
      <Box className="pageHeader">
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <NavLink to="/filtered-layer">
            <Typography color="text.primary">Filtered Layer</Typography>
          </NavLink>
        </Breadcrumbs>
        <Box sx={{ display: "flex" }}>
          <Button
            sx={{ mr: 0.5, px: 1, minWidth: "auto" }}
            variant="outlined"
            onClick={resetViewClick}
          >
            <RestartAltIcon />
          </Button>
        </Box>
      </Box>
    </SubHeader>
  );
};

export default PageHeader;
