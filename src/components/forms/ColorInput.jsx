import React from 'react';
import { MuiColorInput } from "mui-color-input";
import useFormFieldHandling from './hooks/useFormFieldHandling';

const ColorInput = ({ ...rest }) => {
  const formHandling = useFormFieldHandling(rest.input, rest.meta, rest);
  
  return (
    <MuiColorInput
      value={formHandling.value}
      {...rest}
      {...formHandling}
    />
  );
};

export default ColorInput;
