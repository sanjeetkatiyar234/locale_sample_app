import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RightSidePanel from "layout/RightSidePanel";
import { Card, CardContent, TextField } from "@mui/material";
import { Box, Fab, IconButton } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { DatePicker } from "@mui/x-date-pickers";
import { handleChange } from "./rightSidePanelFormSlice";
import "./OriginDestinationRightSidePanel.css";

const OriginDestinationRightSidePanel = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const viewFilterValue = useSelector((state) => state.filterType.value);

  const formValue = useSelector(
    (state) => state.pages.originDestination.rightSidePanelForm.value
  );

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
            {viewFilterValue === "daily" ? (
              <DatePicker
                label="Date"
                value={formValue.daily_start_date}
                onChange={(value) =>
                  dispatch(handleChange({ daily_start_date: value }))
                }
                renderInput={(params) => (
                  <TextField size="small" sx={{ mt: "15px" }} {...params} />
                )}
              />
            ) : (
              <>
                <DatePicker
                  label="Start Date"
                  value={formValue.start_date}
                  onChange={(value) =>
                    dispatch(handleChange({ start_date: value }))
                  }
                  renderInput={(params) => (
                    <TextField size="small" sx={{ mt: "15px" }} {...params} />
                  )}
                />
                <DatePicker
                  minDate={formValue.start_date}
                  label="End Date"
                  value={formValue.end_date}
                  onChange={(value) =>
                    dispatch(handleChange({ end_date: value }))
                  }
                  renderInput={(params) => (
                    <TextField size="small" sx={{ mt: "15px" }} {...params} />
                  )}
                />
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </RightSidePanel>
  );
};

export default OriginDestinationRightSidePanel;
