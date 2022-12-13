import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector, useDispatch } from "react-redux";
import { handleChange } from "./filterTypeSlice";

// TODO make dropdown component generic
const defaultOptions = [
  { value: "daily", label: "Daily" },
  { value: "monthly", label: "Monthly" },
  { value: "detailed", label: "Detailed" },
];

const FilterTypeDropDown = ({ value, onChange, options = defaultOptions }) => {
  const filterTypeValue = useSelector((state) => state.filterType.value);
  const dispatch = useDispatch();
  const handleOnChange = (event) => {
    const action = onChange ?? handleChange;
    dispatch(action(event.target.value));
  };

  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth size="small">
        <InputLabel id="select-label">View Selection</InputLabel>
        <Select
          labelId="select-label"
          value={value ?? filterTypeValue}
          label="Filter Type"
          onChange={handleOnChange}
          variant="outlined"
        >
          {options &&
            options.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterTypeDropDown;
