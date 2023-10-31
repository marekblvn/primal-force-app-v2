import { Paper, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

const MatchCard = ({ id }) => {
  return (
    <Paper>
      <NavLink>
        <Stack>
          <p>Match header</p>
          <p>Match participants</p>
        </Stack>
      </NavLink>
    </Paper>
  );
};

export default MatchCard;
