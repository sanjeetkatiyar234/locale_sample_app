import React, { useState } from "react";
import { Field, reduxForm, getFormValues } from "redux-form";
import ColorInput from "components/forms/ColorInput";
import { Box, Fab, IconButton } from "@mui/material";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { connect, useDispatch, useSelector } from "react-redux";
//local imports
import { convertRbgtoArray } from "utils/convertRgbToArray";
import { convertArrayToRgb } from "utils/convertArrayToRgb";
import { FILTERED_LAYER_COLOR_FORM } from "app/formConstants";
import { applySelectedColor } from "./actions";
import "./FilteredLayerColorForm.css";

const normalizeValue = (value = {}) => ({
  primaryColor: convertRbgtoArray(value.primaryColor),
  secondaryColor: convertRbgtoArray(value.secondaryColor),
});

const FilteredLayerColorForm = () => {
  const dispatch = useDispatch();
  const formValue = useSelector(getFormValues(FILTERED_LAYER_COLOR_FORM));
  const [open, setOpen] = useState(false);

  const handleApply = () => {
    if (formValue) {
      dispatch(applySelectedColor(normalizeValue(formValue)));
    }
  };

  return (
    <>
      <div className={open ? "inActive" : "active"}>
        <Fab
          size="small"
          color="primary"
          aria-label="add"
          sx={{ ml: 1 }}
          onClick={() => setOpen(!open)}
          onMouseEnter={() => setOpen(!open)}
        >
          <ColorLensIcon />
        </Fab>
      </div>
      <Box className={`colorFormContainer ${open ? "active" : "inActive"}`}>
        <div className="closeButton">
          <IconButton size="small" onClick={() => setOpen(!open)}>
            <HighlightOffIcon />
          </IconButton>
        </div>
        <form className="form">
          <Field
            name="primaryColor"
            component={ColorInput}
            size="small"
            label="Primary Color"
            onChange={handleApply}
          />
          <Field
            name="secondaryColor"
            component={ColorInput}
            size="small"
            label="Secondary Color"
            onChange={handleApply}
          />
        </form>
      </Box>
    </>
  );
};

export default connect((state) => {
  const primaryColor = convertArrayToRgb(
    state.pages.filteredLayer.selectedColor.primaryColor
  );
  const secondaryColor = convertArrayToRgb(
    state.pages.filteredLayer.selectedColor.secondaryColor
  );

  return {
    initialValues: {
      primaryColor: primaryColor || "rgb(170, 255, 0)",
      secondaryColor: secondaryColor || "rgb(144, 238, 144)",
    },
  };
})(
  reduxForm({
    form: FILTERED_LAYER_COLOR_FORM,
    enableReinitialize: true,
    destroyOnUnmount: false,
  })(FilteredLayerColorForm)
);
