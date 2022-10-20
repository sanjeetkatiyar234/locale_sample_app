import { ORIGIN_DESTINATION_COLOR_FORM } from "app/formConstants";
import React from "react";
import { Field, reduxForm } from "redux-form";
import ColorInput from "components/forms/ColorInput";
import { Card, CardContent } from "@mui/material";

const OriginDestinationColorForm = ({ handleSubmit }) => {
  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit}>
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
        </form>
      </CardContent>
    </Card>
  );
};

export default reduxForm({
  form: ORIGIN_DESTINATION_COLOR_FORM,
})(OriginDestinationColorForm);
