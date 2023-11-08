import { IconButton, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSnackbar } from "notistack";
const CloseSnackbarButton = ({ snackbarKey }) => {
  const theme = useTheme();
  const { closeSnackbar } = useSnackbar();
  return (
    <IconButton
      onClick={() => closeSnackbar(snackbarKey)}
      sx={{ color: theme.palette.white.main }}
    >
      <CloseIcon />
    </IconButton>
  );
};

export default CloseSnackbarButton;
