import { Select, useTheme, MenuItem } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Lsi from "../Lsi";
import Label from "./Label";

const regions = [
  {
    name: <Lsi lsi={{ en: "Europe West (EUW)", cs: "Západní Evropa (EUW)" }} />,
    value: "EUW1",
  },
  {
    name: (
      <Lsi
        lsi={{
          en: "Europe Nordic & East (EUNE)",
          cs: "Severní a východní Evropa (EUNE)",
        }}
      />
    ),
    value: "EUN1",
  },
];

const RegionSelect = ({ onChange }) => {
  const theme = useTheme();
  return (
    <>
      <Label>
        <Lsi lsi={{ en: "Region", cs: "Region" }} />
      </Label>
      <Select
        disableUnderline
        IconComponent={ExpandMoreIcon}
        defaultValue={"EUW1"}
        onChange={onChange}
        sx={{
          width: "100%",
          fontFamily: "Poppins, sans-serif",
          fontWeight: 400,
          fontSize: "1rem",
          justifyContent: "center",
          alignItems: "center",
          height: "44px",
          border: `solid 2px ${theme.palette.secondary.light}`,
          borderRadius: "8px",
          ".MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
      >
        {regions.map((region, index) => {
          return (
            <MenuItem key={index} value={region.value}>
              {region.name}
            </MenuItem>
          );
        })}
      </Select>
    </>
  );
};

export default RegionSelect;
