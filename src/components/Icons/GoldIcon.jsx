import { Box } from "@mui/material";
import gold from "../../static/img/icons/lol-ui/gold.webp";
const GoldIcon = ({ team, ...props }) => {
  return (
    <Box
      component="img"
      alt="gold"
      src={gold}
      width={{ xs: "12px", sm: "16px", lg: "20px" }}
      height={{ xs: "9px", sm: "12px", lg: "15px" }}
      {...props}
    />
  );
};

export default GoldIcon;
