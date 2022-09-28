import React from "react";
import { Tooltip } from "@mui/material";

const CustomTooltip = ({ disable = false, children, ...props }) => {
  return disable ? children : <Tooltip {...props}>{children}</Tooltip>;
};

export default CustomTooltip;
