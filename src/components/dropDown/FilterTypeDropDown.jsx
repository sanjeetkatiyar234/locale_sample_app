import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector, useDispatch } from "react-redux";
import { handleChange } from "./filterTypeSlice";

const FilterTypeDropDown = () => {
  const filterTypeValue = useSelector((state) => state.filterType.value);
  const dispatch = useDispatch();

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth size="small">
        <InputLabel id="select-label">Filter Type</InputLabel>
        <Select
          labelId="select-label"
          value={filterTypeValue}
          label="Filter Type"
          onChange={(event) => {
            dispatch(handleChange(event.target.value));
          }}
          variant="outlined"
        >
          <MenuItem value="intraDay">Intra Day</MenuItem>
          <MenuItem value="monthly">Monthly</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterTypeDropDown;
