import React from "react";
import RightSidePanel from "layout/RightSidePanel";
import { Card, CardContent, Typography } from "@mui/material";
import OriginDestinationColorForm from "./OriginDestinationColorForm";

const OriginDestinationRightSidePanel = () => {
  
  return (
    <RightSidePanel>
      <Card component="div">
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Overview Summary
          </Typography>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          laborum non perferendis asperiores qui. Earum, esse?
        </CardContent>
      </Card>
      <Card>
        <CardContent>
        <OriginDestinationColorForm />
        </CardContent>
      </Card>
    </RightSidePanel>
  );
};

export default OriginDestinationRightSidePanel;
