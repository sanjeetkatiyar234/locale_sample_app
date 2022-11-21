import React from "react";
import { Box, Breadcrumbs, Link as MuiLink, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import SubHeader from "layout/SubHeader";
import "./PageHeader.css";

const PageHeader = () => {
  return (
    <SubHeader>
      <Box className="pageHeader">
        <Breadcrumbs aria-label="breadcrumb">
          <NavLink to="/">
            <Typography color="text.primary">Dashboard</Typography>
          </NavLink>
        </Breadcrumbs>
        {/* <Box component="div">
        </Box> */}
      </Box>
    </SubHeader>
  );
};

export default PageHeader;
