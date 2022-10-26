import { Box } from '@mui/material';
import React from 'react';
import "./RightSidePanel.css";

const RightSidePanel = ({children}) => {
  return (
    <Box className="rightSidePanel" component="div">{children}</Box>
  );
}

export default RightSidePanel;