import { Box } from "@mui/material";
import inhib100 from "../../static/img/icons/lol-ui/inhibitor-100.png";
import inhib200 from "../../static/img/icons/lol-ui/inhibitor-200.png";

const InhibitorIcon = ({ teamId, ...props }) => {
  const icon = {
    200: inhib200,
    100: inhib100,
  };
  return <Box component="img" alt="inhibitor" src={icon[teamId]} {...props} />;
};

export default InhibitorIcon;
