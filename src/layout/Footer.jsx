import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Card sx={{ marginTop: "auto" }}>
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: "16px",
          "&:last-child": { pb: "16px" },
        }}
      >
        <Box>
          <Typography variant="body1">Status: loaded</Typography>
        </Box>
        <Typography variant="body1" sx={{ mr: 1 }}>
          2022&#169;Livli
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Footer;
