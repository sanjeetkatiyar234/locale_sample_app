import React from "react";
import { Field, reduxForm, getFormValues } from "redux-form";
import ColorInput from "components/forms/ColorInput";
import { Card, CardContent } from "@mui/material";
import { convertRbgtoArray } from "utils/convertRgbToArray";
import { useDispatch, useSelector } from "react-redux";
import { PREDICTION_LAYER_COLOR_FORM } from "app/formConstants";
import { applySelectedColor } from "./actions";

const normalizeValue = (value = {}) => ({
  primaryColor: convertRbgtoArray(value.primaryColor),
  secondaryColor: convertRbgtoArray(value.secondaryColor),
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
      </CardContent>
    </Card>
  );
};

export default reduxForm({
  form: PREDICTION_LAYER_COLOR_FORM,
  enableReinitialize: false,
  initialValues: {
    primaryColor: "rgb(255, 0, 0)",
    secondaryColor: "rgb(255, 255, 0)",
  },
  destroyOnUnmount: false,
})(PredictionLayerColorForm);
