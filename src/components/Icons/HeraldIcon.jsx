import { Box } from "@mui/material";
import herald100 from "../../static/img/icons/lol-ui/herald-100.png";
import herald200 from "../../static/img/icons/lol-ui/herald-200.png";

const HeraldIcon = ({ teamId, ...props }) => {
  const icon = {
    100: herald100,
    200: herald200,
  };
  return <Box component="img" alt="herald" src={icon[teamId]} {...props} />;
};

export default HeraldIcon;
