import { IconButton, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSnackbar } from "notistack";
const CloseSnackbarButton = ({ key }) => {
  const theme = useTheme();
  const { closeSnackbar } = useSnackbar();
  return (
    <IconButton
      onClick={() => closeSnackbar(key)}
      sx={{ color: theme.palette.white.main }}
    >
      <CloseIcon />
    </IconButton>
  );
};

export default CloseSnackbarButton;
