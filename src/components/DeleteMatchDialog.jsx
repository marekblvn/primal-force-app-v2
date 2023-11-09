import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  CircularProgress,
} from "@mui/material";
import Lsi from "./Lsi";
import { useTheme } from "@emotion/react";

const DeleteMatchDialog = ({ open, onClose, onConfirm, loading, ...props }) => {
  const theme = useTheme();
  return (
    <Dialog
      open={open}
      onClose={onClose}
      {...props}
      PaperProps={{
        style: { backgroundColor: theme.palette.white.main, padding: "4px" },
      }}
    >
      <DialogTitle
        textAlign="start"
        color={theme.palette.black.main}
        fontWeight={700}
        fontSize="18px"
        fontFamily="Red Hat Display, sans-serif"
      >
        <Lsi
          lsi={{
            en: "Are you sure you want to delete this match?",
            cs: "Opravdu chcete tento zápas smazat?",
          }}
        />
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          textAlign="start"
          fontSize="16px"
          color={theme.palette.black.main}
          fontFamily="Red Hat Display, sans-serif"
        >
          <Lsi
            lsi={{
              en: "This match will be removed from the database permanently.",
              cs: "Tento zápas bude trvale odstraněn z databáze.",
            }}
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "flex-end", gap: "8px" }}>
        <Button
          onClick={onClose}
          sx={{
            backgroundColor: theme.palette.white.main,
            fontFamily: "Red Hat Display, sans-serif",
            textTransform: "none",
            fontWeight: 700,
            color: theme.palette.secondary.main,
            border: `solid 2px ${theme.palette.secondary.main}`,
            "&:hover": {
              backgroundColor: "#e8e8e8",
              fontWeight: 900,
            },
          }}
        >
          <Lsi lsi={{ en: "No", cs: "Ne" }} />
        </Button>
        <Button
          onClick={onConfirm}
          sx={{
            backgroundColor: theme.palette.secondary.main,
            fontFamily: "Red Hat Display, sans-serif",
            textTransform: "none",
            fontWeight: 700,
            color: theme.palette.white.main,
            border: `solid 2px ${theme.palette.secondary.main}`,
            "&:hover": {
              backgroundColor: theme.palette.secondary.dark,
              borderColor: theme.palette.secondary.dark,
              fontWeight: 800,
            },
          }}
        >
          {loading ? (
            <CircularProgress
              size={24}
              sx={{ color: theme.palette.white.main }}
            />
          ) : (
            <Lsi lsi={{ en: "Yes", cs: "Ano" }} />
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteMatchDialog;
