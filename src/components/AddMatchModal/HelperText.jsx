import { Typography, useFormControl } from "@mui/material";
import { useEffect, useState } from "react";

const HelperText = ({ children, error }) => {
  const { filled, required } = useFormControl();
  const [dirty, setDirty] = useState();
  useEffect(() => {
    if (filled) {
      setDirty(true);
    }
  }, [filled]);
  const showText = (required && dirty && !filled) || error;
  return (
    showText && (
      <Typography
        fontFamily="Red Hat Display, sans-serif"
        fontSize="12px"
        color="red !important"
      >
        {children}
      </Typography>
    )
  );
};

export default HelperText;
