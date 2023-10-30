import { IconButton, useTheme } from "@mui/material";

const ActionButton = ({ icon, borderRadius, onClick, hidden }) => {
  const theme = useTheme();
  return (
    <IconButton
      sx={{
        visibility: hidden ? "hidden" : "visible",
        backgroundColor: theme.palette.white.main,
        width: { xs: "31px", sm: "44px" },
        height: { xs: "31px", sm: "44px" },
        margin: 0,
        borderRadius: borderRadius,
        color: theme.palette.primary.main,
        "&:hover": {
          backgroundColor: theme.palette.secondary.dark,
          color: theme.palette.white.main,
        },
      }}
      onClick={onClick}
    >
      {icon}
    </IconButton>
  );
};

export default ActionButton;
