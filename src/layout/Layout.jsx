import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import SideBar from "./SideBar";
import MainContent from "./MainContent";

const Layout = ({ children }) => {
  console.log("children", children);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <SideBar />
      <MainContent>{children}</MainContent>
    </Box>
  );
};

export default Layout;
