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
        colors={['#2b2828', '#2b2828', '#2b2828', '#2b2828','#2b2828']}
      />
    </Box>
  );
};

export default PageLoader;