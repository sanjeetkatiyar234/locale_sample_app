import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import MapIcon from "@mui/icons-material/Map";
import HomeIcon from "@mui/icons-material/Home";
import { NavLink } from "react-router-dom";
import { Tooltip } from "@mui/material";

export const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const SideBar = ({ open, handleDrawerClose }) => {
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        {open && (
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        )}
      </DrawerHeader>
      <Divider />
      <List>
        <NavLink to="/">
          <ListItem disablePadding sx={{ display: "block" }}>
            <Tooltip title="Map">
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <HomeIcon />
                </ListItemIcon>

                <ListItemText
                  primary="Home"
                  sx={{ opacity: open ? 1 : 0, textDecoration: "none" }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        </NavLink>
        <NavLink to="/map">
          <ListItem disablePadding sx={{ display: "block" }}>
            <Tooltip title="Map">
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <MapIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Map"
                  sx={{ opacity: open ? 1 : 0, textDecoration: "none" }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        </NavLink>
        <NavLink to="/arclayer">
          <ListItem disablePadding sx={{ display: "block" }}>
            <Tooltip title="Arc Layer">
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <ArchitectureIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Arc Layer"
                  sx={{ opacity: open ? 1 : 0, textDecoration: "none" }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        </NavLink>
      </List>
    </Drawer>
  );
};

export default SideBar;
