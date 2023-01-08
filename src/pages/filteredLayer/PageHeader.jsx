import React from "react";
import { Box, Breadcrumbs, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
// customs imports
import SubHeader from "layout/SubHeader";
import FilterTypeDropDown from "components/dropDown/FilterTypeDropDown";
import { resetMapPosition } from "app/actions";
import "./PageHeader.css";
import { resetFilteredLayerView } from "./actions";
import { resetValue } from "./rightSidePanelFormSlice";
import { resetFilterView, handleChange } from "./viewFilterSlice";
import getFetchDataTimeValue from "utils/getFetchDataTimeValue";

const options = [
  { value: "daily", label: "Daily" },
  { value: "monthly", label: "Monthly" },
];
const PageHeader = () => {
  const dispatch = useDispatch();
  const viewFilterValue = useSelector(
    (state) => state.pages.filteredLayer.viewFilter.value
  );
  const formValue = useSelector(
    (state) => state.pages.filteredLayer.rightSidePanelForm.value
  );
  const resetViewClick = () => {
    dispatch(resetFilteredLayerView());
    dispatch(resetValue());
    dispatch(resetFilterView());
    dispatch(resetMapPosition(true));
  };
  return (
    <SubHeader>
      <Box className="pageHeader">
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <NavLink to="/filtered-layer">
            <Typography color="text.primary">Filtered Layer</Typography>
          </NavLink>
        </Breadcrumbs>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ mr: 1, display: "flex", alignItems: "center" }}>
            <Typography>
              Selected Date :{" "}
              {getFetchDataTimeValue(viewFilterValue, formValue)}
            </Typography>
          </Box>
          <Button
            sx={{ mr: 0.5, px: 1, minWidth: "auto" }}
            variant="outlined"
            onClick={resetViewClick}
          >
            <RestartAltIcon />
          </Button>
          <FilterTypeDropDown
            value={viewFilterValue}
            onChange={handleChange}
            options={options}
          />
        </Box>
      </Box>
    </SubHeader>
  );
};

export default PageHeader;
