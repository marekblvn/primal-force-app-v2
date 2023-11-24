import { Box } from "@mui/material";
import tower100 from "../../static/img/icons/lol-ui/tower-100.png";
import tower200 from "../../static/img/icons/lol-ui/tower-200.png";

const TowerIcon = ({ teamId, ...props }) => {
  const icon = {
    100: tower100,
    200: tower200,
  };
  return <Box component="img" alt="tower" src={icon[teamId]} {...props} />;
};

export default TowerIcon;
