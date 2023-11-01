import { Box } from "@mui/material";
import gold from "../../static/img/icons/lol-ui/gold.webp";
const GoldIcon = ({ team, ...props }) => {
  return <Box component="img" alt="gold" src={gold} {...props} />;
};

export default GoldIcon;
