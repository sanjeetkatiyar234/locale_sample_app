import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import EventNoteIcon from "@mui/icons-material/EventNote";
import VideocamIcon from "@mui/icons-material/Videocam";
import LiveTvSharpIcon from "@mui/icons-material/LiveTvSharp";
import PageHeader from "./PageHeader";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Dashboard = () => {
  return (
    <div>
      <PageHeader />
      <Box sx={{ padding: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Welcome Back
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Livli Dashboard
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card>
              <CardContent sx={{ display: "flex" }}>
                <Box>
                  <Typography gutterBottom variant="body1" component="div">
                    Facilities
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    0
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card>
              <CardContent sx={{ display: "flex" }}>
                <Box>
                  <Typography gutterBottom variant="body1" component="div">
                    Cameras
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    0
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card>
              <CardContent sx={{ display: "flex" }}>
                <Box>
                  <Typography gutterBottom variant="body1" component="div">
                    Screens
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    0
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Livli Dashboard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus expedita similique deleniti maxime provident, inventore quod blanditiis dicta necessitatibus dolore esse officia, vero sequi rerum consequuntur quaerat magnam beatae tempora.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Dashboard;
