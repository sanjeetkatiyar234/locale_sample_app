import { Box } from '@mui/material';
import React from 'react';
import "./PageLeftSidePanel.css";

const PageLeftSidePanel = ({children}) => {
    return (
        <Box className="pageleftPanel" component="div">{children}</Box>
      );
}

export default PageLeftSidePanel;