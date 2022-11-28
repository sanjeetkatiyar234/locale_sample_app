import { ORIGIN_DESTINATION_COLOR_FORM } from "app/formConstants";
import React from "react";
import { Field, reduxForm, getFormValues } from "redux-form";
import ColorInput from "components/forms/ColorInput";
import { Card, CardContent } from "@mui/material";
import { convertRbgtoArray } from "utils/convertRgbToArray";
import { convertArrayToRgb } from "utils/convertArrayToRgb";
import { connect, useDispatch, useSelector } from "react-redux";
import { applySelectedColor } from "./actions";

const normalizeValue = (value = {}) => ({
  primaryColor: convertRbgtoArray(value.primaryColor),
  secondaryColor: convertRbgtoArray(value.secondaryColor),
});

const OriginDestinationColorForm = () => {
  const dispatch = useDispatch();
  const formValue = useSelector(getFormValues(ORIGIN_DESTINATION_COLOR_FORM));

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

export default connect((state) => {
  const primaryColor = convertArrayToRgb(
    state.pages.originDestination.selectedColor.primaryColor
  );
  const secondaryColor = convertArrayToRgb(
    state.pages.originDestination.selectedColor.secondaryColor
  );
  console.log(primaryColor);
  console.log(secondaryColor);
  return {
    initialValues: {
      primaryColor: primaryColor || "rgb(170, 255, 0)",
      secondaryColor: secondaryColor || "rgb(144, 238, 144)",
    },
  };
})(
  reduxForm({
    form: ORIGIN_DESTINATION_COLOR_FORM,
    enableReinitialize: true,
    destroyOnUnmount: false,
  })(OriginDestinationColorForm)
);
