import React from "react";
import { Field, reduxForm, getFormValues } from "redux-form";
import ColorInput from "components/forms/ColorInput";
import { Card, CardContent, Typography } from "@mui/material";
import { convertRbgtoArray } from "utils/convertRgbToArray";
import { useDispatch, useSelector } from "react-redux";
import { PREDICTION_LAYER_COLOR_FORM } from "app/formConstants";
import { applySelectedColor } from "./actions";

const normalizeValue = (value = {}) => ({
  mainViewPrimaryColor: convertRbgtoArray(value.mainViewPrimaryColor),
  mainViewSecondaryColor: convertRbgtoArray(value.mainViewSecondaryColor),
  miniViewPrimaryColor: convertRbgtoArray(value.miniViewPrimaryColor),
  miniViewSecondaryColor: convertRbgtoArray(value.miniViewSecondaryColor),
});

const PredictionLayerColorForm = () => {
  const dispatch = useDispatch();
  const formValue = useSelector(getFormValues(PREDICTION_LAYER_COLOR_FORM));

  const handleApply = () => {
    if (formValue) {
      dispatch(applySelectedColor(normalizeValue(formValue)));
    }
  };

  return (
    <Card>
      <CardContent>
        <form>
          <Typography gutterBottom>Actual View</Typography>
          <Field
            name="miniViewPrimaryColor"
            component={ColorInput}
            size="small"
            label="Primary Color"
            onChange={handleApply}
          />
          <Field
            name="miniViewSecondaryColor"
            component={ColorInput}
            size="small"
            label="Secondary Color"
            onChange={handleApply}
          />
          <Typography gutterBottom>Predicated View</Typography>
          <Field
            name="mainViewPrimaryColor"
            component={ColorInput}
            size="small"
            label="Primary Color"
            onChange={handleApply}
          />
          <Field
            name="mainViewSecondaryColor"
            component={ColorInput}
            size="small"
            label="Secondary Color"
            onChange={handleApply}
          />
        </form>
      </CardContent>
    </Card>
  );
};

export default reduxForm({
  form: PREDICTION_LAYER_COLOR_FORM,
  enableReinitialize: false,
  initialValues: {
    mainViewPrimaryColor: "rgba(170, 255, 0,0.5)",
    mainViewSecondaryColor: "rgba(144, 238, 144,0.5)",
    miniViewPrimaryColor: "rgba(170, 255, 0,0.5)",
    miniViewSecondaryColor: "rgba(144, 238, 144,0.5)",
  },
  destroyOnUnmount: false,
})(PredictionLayerColorForm);
