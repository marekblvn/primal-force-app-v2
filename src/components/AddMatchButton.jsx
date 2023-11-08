import { useTheme } from "@emotion/react";
import { Fab, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddMatchButton = ({ onClick }) => {
  const theme = useTheme();
  return (
    <Tooltip>
      <Fab>
        <AddIcon />
      </Fab>
    </Tooltip>
  );
};

export default AddMatchButton;
