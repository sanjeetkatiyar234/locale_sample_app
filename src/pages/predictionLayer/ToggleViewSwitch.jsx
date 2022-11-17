import * as React from "react";
import Switch from "@mui/material/Switch";
import { FormControlLabel } from "@mui/material";

export default function ToggleViewSwitch({ checked, handleValueChecked }) {
  const handleChange = (event) => {
    handleValueChecked(event.target.checked);
  };

  return (
    <FormControlLabel
      control={<Switch checked={checked} onChange={handleChange} />}
      label="Toggle View"
    />
  );
}
