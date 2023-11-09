import {
  Button,
  FormControl,
  Grid,
  IconButton,
  Modal,
  Paper,
  Stack,
  Typography,
  useTheme,
  CircularProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Lsi from "../Lsi";
import GameIdInput from "./GameIdInput";
import RegionSelect from "./RegionSelect";
import { useState } from "react";

const AddMatchModal = ({ open, onClose, onConfirm, loading }) => {
  const theme = useTheme();
  const [inputError, setInputError] = useState(null);
  const [gameId, setGameId] = useState("");
  const [region, setRegion] = useState("EUW1");
  const handleConfirm = () => {
    onConfirm({ gameId, routingCode: region });
  };
  const handleRegionChange = ({ target: { value } }) => {
    setRegion(value);
  };
  const handleInputChange = ({ target: { value } }) => {
    setGameId(value);
    const INT_PATTERN = /^-?\d+$/;
    const valueIsInt = INT_PATTERN.test(value);
    if (!value) {
      setInputError(null);
      return;
    }
    if (!valueIsInt) {
      setInputError(
        <Lsi
          lsi={{
            en: "Game Id must be a number.",
            cs: "Id zápasu musí být číslo.",
          }}
        />
      );
      return;
    }
    if (parseInt(value) < 1) {
      setInputError(
        <Lsi
          lsi={{
            en: "Game Id must be a positive integer.",
            cs: "Id zápasu musí být kladné celé číslo.",
          }}
        />
      );
      return;
    }

    setInputError(null);
    return;
  };
  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        sx={{
          backgroundColor: theme.palette.white.main,
          width: "auto",
          padding: "16px",
          borderRadius: "10px",
        }}
      >
        <Stack direction="column" alignItems="flex-start" spacing="12px">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            spacing="32px"
          >
            <Typography
              fontFamily="Red Hat Display, sans-serif"
              color={theme.palette.black.main}
              fontWeight={800}
              fontSize="18px"
            >
              <Lsi lsi={{ en: "Add new match", cs: "Přidat nový zápas" }} />
            </Typography>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Grid
            container
            justifyContent="space-evenly"
            alignItems="center"
            width={{ xs: "290px", sm: "400px", md: "600px" }}
          >
            <Grid item height="80px" xs={12} sm={4} md={5}>
              <FormControl required defaultValue="" fullWidth>
                <GameIdInput
                  onChange={handleInputChange}
                  inputError={inputError}
                />
              </FormControl>
            </Grid>
            <Grid item height="80px" xs={12} sm={7} md={6}>
              <FormControl fullWidth>
                <RegionSelect onChange={handleRegionChange} />
              </FormControl>
            </Grid>
          </Grid>
          <Stack
            direction="row"
            justifyContent="flex-end"
            spacing="16px"
            width="100%"
          >
            <Button
              onClick={onClose}
              sx={{
                fontFamily: "Red Hat Display, sans-serif",
                fontWeight: 700,
                textTransform: "none",
                color: theme.palette.secondary.main,
                border: `solid 2px ${theme.palette.secondary.main}`,
                "&:hover": {
                  borderColor: theme.palette.primary.dark,
                  backgroundColor: "#e8e8e8",
                  fontWeight: 800,
                  color: theme.palette.primary.dark,
                },
              }}
            >
              <Lsi lsi={{ en: "Cancel", cs: "Zrušit" }} />
            </Button>
            <Button
              onClick={handleConfirm}
              sx={{
                fontFamily: "Red Hat Display, sans-serif",
                fontWeight: 700,
                textTransform: "none",
                color: theme.palette.white.main,
                backgroundColor: theme.palette.secondary.main,
                border: `solid 2px ${theme.palette.secondary.main}`,
                "&:hover": {
                  backgroundColor: theme.palette.secondary.dark,
                  borderColor: theme.palette.primary.dark,
                  fontWeight: 800,
                },
                "&:disabled": {
                  backgroundColor: "#E5E4E2 !important",
                  borderColor: "#E5E4E2",
                },
              }}
              disabled={inputError || !gameId.length}
            >
              {loading ? (
                <CircularProgress
                  size={24}
                  sx={{ color: theme.palette.white.main }}
                />
              ) : (
                <Lsi lsi={{ en: "Add", cs: "Přidat" }} />
              )}
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Modal>
  );
};

export default AddMatchModal;
