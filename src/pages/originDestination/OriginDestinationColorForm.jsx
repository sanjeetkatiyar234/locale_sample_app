import { ORIGIN_DESTINATION_COLOR_FORM } from "app/formConstants";
import React from "react";
import { Field, reduxForm } from "redux-form";
import ColorInput from "components/forms/ColorInput";
import { Card, CardContent } from "@mui/material";
import FormSubmitButton from "components/forms/submit/FormSubmitButton";
import { convertRbgtoArray } from "utils/convertRgbToArray";
import { useDispatch } from "react-redux";
import { applySelectedColor } from "./actions";

const normalizeValue = (value = {}) => ({
  primaryColor: convertRbgtoArray(value.primaryColor),
  secondaryColor: convertRbgtoArray(value.secondaryColor),
});

const OriginDestinationColorForm = ({ handleSubmit, submitting }) => {
  const dispatch = useDispatch();

  const handleApply = (value) => {
    if (value) {
      dispatch(applySelectedColor(normalizeValue(value)));
    }
  };

  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit(handleApply)}>
          <Field
            name="primaryColor"
            component={ColorInput}
            size="small"
            label="Primary Color"
          />
          <Field
            name="secondaryColor"
            component={ColorInput}
            size="small"
            label="Secondary Color"
          />
          <FormSubmitButton isLoading={submitting} label="Apply" />
        </form>
      </CardContent>
    </Card>
  );
};

export default reduxForm({
  form: ORIGIN_DESTINATION_COLOR_FORM,
  enableReinitialize:true,
  initialValues: {
    primaryColor: "rgb(255, 0, 0)",
    secondaryColor: "rgb(255, 255, 0)",
  },
})(OriginDestinationColorForm);
