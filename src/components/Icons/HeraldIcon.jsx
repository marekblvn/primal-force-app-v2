import { Box } from "@mui/material";
import herald100 from "../../static/img/icons/lol-ui/herald-100.png";
import herald200 from "../../static/img/icons/lol-ui/herald-200.png";

const HeraldIcon = ({ team, ...props }) => {
  const icon = {
    blue: herald100,
    red: herald200,
  };
  return <Box component="img" alt="herald" src={icon[team]} {...props} />;
};

export default HeraldIcon;
