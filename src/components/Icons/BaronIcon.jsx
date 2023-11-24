import { Box } from "@mui/material";
import baron100 from "../../static/img/icons/lol-ui/baron-100.png";
import baron200 from "../../static/img/icons/lol-ui/baron-200.png";

const BaronIcon = ({ teamId, ...props }) => {
  const icon = {
    100: baron100,
    200: baron200,
  };
  return <Box component="img" alt="baron" src={icon[teamId]} {...props} />;
};

export default BaronIcon;
