import React from 'react';
import isNil from 'lodash/isNil';
import LoadingButton from '@mui/lab/LoadingButton';

const FormSubmitButton=({ alwaysEnabledWhenValid,label='Submit',
  isLoading,...rest})=> {

      return (
        <LoadingButton
          type="submit"
          loading={isLoading}
          {...rest}
          variant="contained"
        >
        {label}
        </LoadingButton>
      );
  }


  export default FormSubmitButton;