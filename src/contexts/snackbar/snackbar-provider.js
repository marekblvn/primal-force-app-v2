import { SnackbarProvider } from "notistack";
import CloseSnackbarButton from "../../components/CloseSnackbarButton";
import ErrorIcon from "@mui/icons-material/Error";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const _SnackbarProvider = ({ children }) => {
  return (
    <SnackbarProvider
      action={(key) => <CloseSnackbarButton key={key} />}
      iconVariant={{
        error: <ErrorIcon sx={{ mr: "16px" }} />,
        success: <CheckCircleIcon sx={{ mr: "16px" }} />,
      }}
    >
      {children}
    </SnackbarProvider>
  );
};

export default _SnackbarProvider;
