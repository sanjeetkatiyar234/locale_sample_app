import { Box } from "@mui/material";
import React from "react";
import "./SubHeader.css";

const SubHeader = ({ children }) => {
  return (
    <Box className="subHeader" component="div">
      {children}
    </Box>
  );
};

export default SubHeader;
