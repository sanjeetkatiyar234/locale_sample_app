import React, { useState } from "react";
import RightSidePanel from "layout/RightSidePanel";
import { Card, CardContent, Typography } from "@mui/material";
import { Box, Fab, IconButton } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import "./OriginDestinationRightSidePanel.css";

const OriginDestinationRightSidePanel = () => {
  const [open, setOpen] = useState(false);
  return (
    <RightSidePanel>
      <div className={`activatebutton ${open ? "inActive" : "active"}`}>
        <Fab
          variant="extended"
          size="small"
          color="primary"
          aria-label="add"
          sx={{ ml: 1 }}
          onClick={() => setOpen(!open)}
          // onMouseEnter={() => setOpen(!open)}
        >
          <ArrowCircleLeftIcon />
        </Fab>
      </div>
      <div
        component="div"
        className={`rightsidePanelContainer ${open ? "active" : "inActive"}`}
      >
        <div className="closeButton">
          <IconButton size="small" onClick={() => setOpen(!open)}>
            <HighlightOffIcon />
          </IconButton>
        </div>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Overview Summary
            </Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur laborum non perferendis asperiores qui. Earum, esse?
          </CardContent>
        </Card>
      </div>
    </RightSidePanel>
  );
};

export default OriginDestinationRightSidePanel;
