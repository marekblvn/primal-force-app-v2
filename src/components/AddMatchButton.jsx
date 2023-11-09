import { useTheme } from "@emotion/react";
import { IconButton, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Lsi from "./Lsi";

const AddMatchButton = ({ onClick }) => {
  const theme = useTheme();
  return (
    <Tooltip
      title={<Lsi lsi={{ en: "Add new match", cs: "Přidat nový zápas" }} />}
      arrow
      placement="left"
    >
      <IconButton
        onClick={onClick}
        color="white"
        sx={{
          backgroundColor: theme.palette.primary.main,
          position: "fixed",
          left: 8,
          bottom: 8,
          width: { xs: "36px", sm: "42px", md: "52px" },
          height: { xs: "36px", sm: "42px", md: "52px" },
          padding: "8px",
          "&:hover": {
            backgroundColor: theme.palette.primary.dark,
          },
        }}
      >
        <AddIcon
          sx={{
            width: { xs: "12px", sm: "16px", md: "20px", lg: "28px" },
            height: { xs: "12px", sm: "16px", md: "20px", lg: "28px" },
          }}
        />
      </IconButton>
    </Tooltip>
  );
};

export default AddMatchButton;
