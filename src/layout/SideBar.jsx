import ArchitectureIcon from "@mui/icons-material/Architecture";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HomeIcon from "@mui/icons-material/Home";
import MapIcon from "@mui/icons-material/Map";
import BatchPredictionIcon from '@mui/icons-material/BatchPrediction';
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import * as React from "react";
import { NavLink } from "react-router-dom";
import CustomTooltip from "../components/ToolTip/CustomTooltip";

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
    <Drawer
      variant="permanent"
      open={open}
      style={{ backgroundColor: "rgb(42, 42, 42)" }}
    >
      <DrawerHeader style={{ backgroundColor: "rgb(42, 42, 42)" }}>
        {open && (
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        )}
      </DrawerHeader>
      <Divider />
      <List style={{ backgroundColor: "rgb(42, 42, 42)" }}>
        <NavLink to="/">
          <ListItem disablePadding sx={{ display: "block" }}>
            <CustomTooltip disable={open} title="Home" placement="right" arrow>
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
            </CustomTooltip>
          </ListItem>
        </NavLink>
        <NavLink to="/origin-destination">
          <ListItem disablePadding sx={{ display: "block" }}>
            <CustomTooltip
              disable={open}
              title="Origin destination"
              placement="right"
              arrow
            >
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
                  primary="Origin destination"
                  sx={{ opacity: open ? 1 : 0, textDecoration: "none" }}
                />
              </ListItemButton>
            </CustomTooltip>
          </ListItem>
        </NavLink>
        <NavLink to="/ride-share-demand">
          <ListItem disablePadding sx={{ display: "block" }}>
            <CustomTooltip
              disable={open}
              title="Ride share demand"
              placement="right"
              arrow
            >
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
                  primary="Ride share demand"
                  sx={{ opacity: open ? 1 : 0, textDecoration: "none" }}
                />
              </ListItemButton>
            </CustomTooltip>
          </ListItem>
        </NavLink>
        <NavLink to="/prediction-layer">
          <ListItem disablePadding sx={{ display: "block" }}>
            <CustomTooltip
              disable={open}
              title="Prediction Layer"
              placement="right"
              arrow
            >
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
                  <BatchPredictionIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Prediction Layer"
                  sx={{ opacity: open ? 1 : 0, textDecoration: "none" }}
                />
              </ListItemButton>
            </CustomTooltip>
          </ListItem>
        </NavLink>
      </List>
    </Drawer>
  );
};

export default SideBar;
