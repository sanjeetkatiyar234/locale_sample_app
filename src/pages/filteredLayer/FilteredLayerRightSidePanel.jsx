import React, { useState, useEffect } from "react";
import moment from "moment";
import RightSidePanel from "layout/RightSidePanel";
import { Card, CardContent, Select, TextField } from "@mui/material";
import { Fab, IconButton } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { DatePicker } from "@mui/x-date-pickers";
// local imports
import { FILTERED_LAYER_RIGHT_PANEL_FORM } from "app/formConstants";
import { handleChange } from "./rightSidePanelFormSlice";
import "./FilteredLayerRightSidePanel.css";

const CountKeyOptions = [
  { value: "-1", label: "-1" },
  { value: "6", label: "6" },
  { value: "8", label: "8" },
];
const FilteredLayerRightSidePanel = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const viewFilterValue = useSelector(
    (state) => state.pages.filteredLayer.viewFilter.value
  );
  const { start_date } = useSelector(
    (state) => state.pages.filteredLayer.rightSidePanelForm.value
  );
  // const [localDate, setLocalDate] = useState(start_date);
  const formValue = useSelector(
    (state) => state.pages.filteredLayer.rightSidePanelForm.value
  );

  const handleOnChange = (event) => {
    dispatch(handleChange({ [event.target.name]: event.target.value }));
  };

  // const handleCompleteDateChange = () => {
  //   dispatch(handleChange({ start_date: localDate }));
  // };

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
            <FormControl fullWidth size="small">
              <InputLabel id="select-label">Count Key</InputLabel>
              <Select
                labelId="select-label"
                name="countKey"
                value={formValue.countKey}
                label="Count Key"
                onChange={handleOnChange}
                variant="outlined"
              >
                {CountKeyOptions &&
                  CountKeyOptions.map((option) => (
                    <MenuItem value={option.value}>{option.label}</MenuItem>
                  ))}
              </Select>
            </FormControl>

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
                  maxDate={formValue.end_date}
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

export default FilteredLayerRightSidePanel;
