import { Box } from "@mui/material";
import baron100 from "../../static/img/icons/lol-ui/baron-100.png";
import baron200 from "../../static/img/icons/lol-ui/baron-200.png";

const BaronIcon = ({ team, ...props }) => {
  const icon = {
    blue: baron100,
    red: baron200,
  };
  return <Box component="img" alt="baron" src={icon[team]} {...props} />;
};

export default BaronIcon;
