import { useTheme, Box } from "@mui/material";
import config from "../static/data/config.json";

const baseCdnUri = `${config.baseCdnUrl}${config.lolPatch}/img/item/`;

const ItemIcon = ({ itemId, ...props }) => {
  const theme = useTheme();
  return itemId > 0 ? (
    <Box
      component="img"
      alt=""
      src={baseCdnUri + itemId + ".png"}
      border={`2px solid ${theme.palette.secondary.main}`}
      borderRadius={{ xs: 0, md: "4px" }}
      {...props}
    />
  ) : (
    <Box
      component="div"
      {...props}
      sx={{ opacity: 0.8 }}
      border={`2px solid ${theme.palette.secondary.main}`}
      borderRadius={{ xs: 0, md: "4px" }}
      bgcolor={theme.palette.white.dark}
    />
  );
};

export default ItemIcon;
