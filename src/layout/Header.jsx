import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Toolbar, Typography } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import React from "react";
import smallLogo from "./smallLogo.png";
import { drawerWidth } from "./SideBar";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Header = ({ open, handleDrawerOpen }) => {
  return (
    <AppBar
      position="fixed"
      open={open}
      style={{ backgroundColor: "rgb(42, 42, 42)" }}
    >
      <Toolbar style={{ paddingLeft: "10px" }}>
        {!open && (
          <img
            src={smallLogo}
            alt="fireSpot"
            height="40"
            style={{ marginRight: "5px" }}
          />
        )}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
