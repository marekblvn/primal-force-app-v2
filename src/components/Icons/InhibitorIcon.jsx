import { Box } from "@mui/material";
import inhib100 from "../../static/img/icons/lol-ui/inhibitor-100.png";
import inhib200 from "../../static/img/icons/lol-ui/inhibitor-200.png";

const InhibitorIcon = ({ team, ...props }) => {
  const icon = {
    red: inhib200,
    blue: inhib100,
  };
  return <Box component="img" alt="inhibitor" src={icon[team]} {...props} />;
};

export default InhibitorIcon;
