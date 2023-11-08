import { IconButton, useTheme } from "@mui/material";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const ActionButton = ({ icon, borderRadius, onClick, hidden }) => {
  const { width } = useWindowDimensions();
  const theme = useTheme();
  return (
    <IconButton
      sx={{
        visibility: hidden ? "hidden" : "visible",
        backgroundColor: theme.palette.white.main,
        width: { xs: width > 400 ? "31px" : "24px", sm: "44px" },
        height: { xs: width > 400 ? "31px" : "24px", sm: "44px" },
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
