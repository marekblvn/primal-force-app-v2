import { Box } from "@mui/material";
import tower100 from "../../static/img/icons/lol-ui/tower-100.png";
import tower200 from "../../static/img/icons/lol-ui/tower-200.png";

const TowerIcon = ({ team, ...props }) => {
  const icon = {
    blue: tower100,
    red: tower200,
  };
  return <Box component="img" alt="tower" src={icon[team]} {...props} />;
};

export default TowerIcon;
