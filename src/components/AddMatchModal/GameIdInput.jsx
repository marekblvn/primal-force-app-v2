import { Input, useFormControl, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import Label from "./Label";
import Lsi from "../Lsi";
import HelperText from "./HelperText";

const GameIdInput = ({ onChange, inputError }) => {
  const theme = useTheme();
  const [dirty, setDirty] = useState();
  const { required, filled } = useFormControl();
  useEffect(() => {
    if (filled) {
      setDirty(true);
    }
  }, [filled]);
  const requiredError = dirty && required && !filled;
  return (
    <>
      <Label>
        <Lsi lsi={{ en: "Game Id", cs: "Id zápasu" }} />
      </Label>
      <Input
        disableUnderline
        autoFocus
        onChange={onChange}
        sx={{
          width: "100%",
          padding: "4px 8px 4px 8px",
          fontFamily: "Poppins, sans-serif",
          fontWeight: 500,
          border:
            requiredError || inputError
              ? `solid 2px ${theme.palette.red.main}`
              : `solid 2px ${theme.palette.secondary.light}`,
          borderRadius: "8px",
          fontSize: "1rem",
          "&:hover": {
            border:
              requiredError || inputError
                ? `solid 2px ${theme.palette.red.main}`
                : `solid 2px ${theme.palette.secondary.dark}`,
          },
        }}
      />
      <HelperText error={inputError}>
        {(requiredError && (
          <Lsi
            lsi={{ en: "This field is required.", cs: "Toto pole je povinné." }}
          />
        )) ||
          inputError}
      </HelperText>
    </>
  );
};

export default GameIdInput;
