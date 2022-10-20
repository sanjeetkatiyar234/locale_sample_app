import { ORIGIN_DESTINATION_COLOR_FORM } from 'app/formConstants';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import ColorInput from 'components/forms/ColorInput';

const OriginDestinationColorForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}> 
          <Field name='primaryColor' component={ColorInput} size="small"  />
          <Field name='secondaryColor' component={ColorInput} size="small" />
          
    </form>
  )
}

export default reduxForm({
    form: ORIGIN_DESTINATION_COLOR_FORM
  })(OriginDestinationColorForm) ;