import { Typography, useFormControl } from "@mui/material";

const Label = ({ children }) => {
  const { required } = useFormControl();
  return (
    <Typography
      variant="body2"
      fontFamily="Red Hat Display, sans-serif"
      fontWeight={600}
    >
      {children}
      {required && (
        <span
          style={{
            fontWeight: 400,
            fontSize: "12px",
            fontStyle: "italic",
          }}
        >
          *
        </span>
      )}
    </Typography>
  );
};

export default Label;
