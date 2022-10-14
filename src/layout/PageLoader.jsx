import { Box } from "@mui/material";
import React from "react";
import { ColorRing } from "react-loader-spinner";
import "./PageLoader.css";

const PageLoader = () => {
  return (
    <Box className="pageLoader" component="div">
      <ColorRing
        visible={true}
        height="100px"
        width="100px"
        ariaLabel="blocks-loading"
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </Box>
  );
};

export default PageLoader;