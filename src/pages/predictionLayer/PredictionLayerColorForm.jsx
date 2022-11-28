import React from "react";
import { Field, reduxForm, getFormValues } from "redux-form";
import ColorInput from "components/forms/ColorInput";
import { Card, CardContent, Typography } from "@mui/material";
import { convertRbgtoArray } from "utils/convertRgbToArray";
import { convertArrayToRgb } from "utils/convertArrayToRgb";
import { useDispatch, useSelector, connect } from "react-redux";
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

export default connect((state) => {
  const mainViewPrimaryColor = convertArrayToRgb(
    state.pages.predictionLayer.selectedColor.mainViewPrimaryColor
  );
  const mainViewSecondaryColor = convertArrayToRgb(
    state.pages.predictionLayer.selectedColor.mainViewSecondaryColor
  );
  const miniViewPrimaryColor = convertArrayToRgb(
    state.pages.predictionLayer.selectedColor.miniViewPrimaryColor
  );
  const miniViewSecondaryColor = convertArrayToRgb(
    state.pages.predictionLayer.selectedColor.miniViewSecondaryColor
  );

  return {
    initialValues: {
      mainViewPrimaryColor: mainViewPrimaryColor || "rgba(170, 255, 0,0.5)",
      mainViewSecondaryColor:
        mainViewSecondaryColor || "rgba(144, 238, 144,0.5)",
      miniViewPrimaryColor: miniViewPrimaryColor || "rgba(170, 255, 0,0.5)",
      miniViewSecondaryColor:
        miniViewSecondaryColor || "rgba(144, 238, 144,0.5)",
    },
  };
})(
  reduxForm({
    form: PREDICTION_LAYER_COLOR_FORM,
    enableReinitialize: true,
    destroyOnUnmount: false,
  })(PredictionLayerColorForm)
);
