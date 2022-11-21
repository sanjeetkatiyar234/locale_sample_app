import { Box, Card, CardContent, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import EventNoteIcon from "@mui/icons-material/EventNote";
import VideocamIcon from "@mui/icons-material/Videocam";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LiveTvSharpIcon from "@mui/icons-material/LiveTvSharp";
import PageHeader from "./PageHeader";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

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
                <Typography gutterBottom variant="body1" component="div">
                  Welcome Back !
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Livli Dashboard
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card>
              <CardContent
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Box>
                  <Typography gutterBottom variant="body1" component="div">
                    Facilitites
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    5
                  </Typography>
                </Box>
                <Box component="div">
                  <EventNoteIcon />
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card>
              <CardContent
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Box>
                  <Typography gutterBottom variant="body1" component="div">
                    Cameras
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    4
                  </Typography>
                </Box>
                <Box component="div">
                  <VideocamIcon />
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card>
              <CardContent
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Box>
                  <Typography gutterBottom variant="body1" component="div">
                    Screens
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    0
                  </Typography>
                </Box>
                <Box component="div">
                  <LiveTvSharpIcon />
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card>
              <CardContent sx={{ paddingBottom: 0 }}>
                <Typography gutterBottom variant="body1">
                  How it works
                </Typography>
                <Timeline
                  sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                      flex: 0,
                      padding: 0,
                    },
                  }}
                >
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ display: "flex" }}>
                      <Box sx={{ p: 1, paddingRight: 2 }}>
                        <VideocamIcon />
                      </Box>
                      <Box>
                        <Typography variant="body1">Capture Video</Typography>
                        <Typography variant="body2">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Officiis nesciunt necessitatibus quam, non
                        </Typography>
                      </Box>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ display: "flex" }}>
                      <Box sx={{ p: 1, paddingRight: 2 }}>
                        <PermIdentityIcon />
                      </Box>
                      <Box>
                        <Typography variant="body1">
                          Enagage and Target your customer
                        </Typography>
                        <Typography variant="body2">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Officiis
                        </Typography>
                      </Box>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent sx={{ display: "flex" }}>
                      <Box sx={{ p: 1, paddingRight: 2 }}>
                        <TrendingUpIcon />
                      </Box>
                      <Box>
                        <Typography variant="body1">
                          Location efficiency
                        </Typography>
                        <Typography variant="body2">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Officiis dffde.
                        </Typography>
                      </Box>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Dashboard;
