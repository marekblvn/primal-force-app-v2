import { Box } from "@mui/material";
import dragon100 from "../../static/img/icons/lol-ui/dragon-100.png";
import dragon200 from "../../static/img/icons/lol-ui/dragon-200.png";

const DragonIcon = ({ team, ...props }) => {
  const icon = {
    blue: dragon100,
    red: dragon200,
  };
  return <Box component="img" alt="dragon" src={icon[team]} {...props} />;
};

export default DragonIcon;
