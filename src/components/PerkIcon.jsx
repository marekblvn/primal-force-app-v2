import { Box } from "@mui/material";

const imgCdnUrl = process.env.REACT_APP_PMF_API_URL + "api/image/perk/";

const PerkIcon = ({ id, ...props }) => {
  return (
    <Box component="img" alt="perk" src={imgCdnUrl + id + ".png"} {...props} />
  );
};

export default PerkIcon;
