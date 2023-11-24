import { Box } from "@mui/material";
import dragon100 from "../../static/img/icons/lol-ui/dragon-100.png";
import dragon200 from "../../static/img/icons/lol-ui/dragon-200.png";

const DragonIcon = ({ teamId, ...props }) => {
  const icon = {
    100: dragon100,
    200: dragon200,
  };
  return <Box component="img" alt="dragon" src={icon[teamId]} {...props} />;
};

export default DragonIcon;
