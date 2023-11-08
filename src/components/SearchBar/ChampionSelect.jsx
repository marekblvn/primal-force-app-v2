import {
  Checkbox,
  useTheme,
  Select,
  MenuItem,
  Typography,
  Stack,
  Input,
  Tooltip,
} from "@mui/material";
import ChampionIcon from "../ChampionIcon";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Lsi from "../Lsi";
import champions from "../../static/data/champions.json";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const ChampionSelect = ({ championFilter, onChampionFilterChange }) => {
  const { width } = useWindowDimensions();
  const selectToScreenProportion = 0.45;
  const championIconSize = width >= 600 ? 32 : 18; //px
  const maxGallerySize =
    Math.floor(
      (width * selectToScreenProportion * 0.8) / (championIconSize + 16)
    ) - 1;
  const theme = useTheme();
  return (
    <Select
      sx={{
        width: "80%",
        "& .MuiSvgIcon-root": {
          color: theme.palette.secondary.light,
        },
      }}
      SelectDisplayProps={{
        style: {
          height: width >= 600 ? "36px" : width >= 400 ? "12px" : "8px",
          minWidth: "75px",
        },
      }}
      IconComponent={KeyboardArrowDownIcon}
      value={championFilter}
      displayEmpty
      onChange={onChampionFilterChange}
      multiple
      input={<Input disableUnderline margin="none" />}
      inputProps={{
        sx: {
          backgroundColor: theme.palette.white.main,
          // padding: { xs: "1px 0px 0px 2px", sm: "4px 4px 4px 6px" },
          padding:
            width >= 600
              ? "4px 4px 4px 6px"
              : width >= 400
              ? "4px 4px 4px 4px"
              : "0.5px 0px 0.5px 2px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          borderRadius: championFilter.length ? "0 0 0 0" : "0 8px 8px 0",
          // height: { xs: width > 400 ? "12px" : "8px", sm: "36px" },
          height: width >= 600 ? "36px" : width >= 400 ? "12px" : "8px",
          "&:focus": {
            borderRadius: 0,
          },
        },
      }}
      renderValue={(selected) => {
        if (!selected.length) {
          return (
            <Typography
              paddingLeft="6px"
              paddingRight="32px"
              noWrap
              fontFamily="Red Hat Display, sans-serif"
              fontStyle="italic"
              fontSize={{ xs: "11px", sm: "16px" }}
            >
              <Lsi
                lsi={{ en: "Select champions...", cs: "Vyber šampiony..." }}
              />
            </Typography>
          );
        }
        return (
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing="12px"
          >
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing="8px"
            >
              {selected.slice(0, maxGallerySize).map((s, index) => (
                <ChampionIcon
                  key={index}
                  width={`${championIconSize}px`}
                  height={`${championIconSize}px`}
                  name={s}
                />
              ))}
            </Stack>
            {selected.length > maxGallerySize && (
              <Tooltip
                title={selected.slice(maxGallerySize).join(", ")}
                placement="bottom"
                arrow
              >
                <Typography
                  fontSize={{ xs: "11px", sm: "16px" }}
                  textAlign="center"
                >
                  +{selected.length - maxGallerySize}
                </Typography>
              </Tooltip>
            )}
          </Stack>
        );
      }}
      MenuProps={{
        sx: {
          "&& .Mui-selected": {
            backgroundColor: "#cac9d8",
          },
        },
      }}
    >
      {champions.map((champion) => {
        const checked = championFilter.indexOf(champion.name) > -1;
        return (
          <MenuItem
            key={champion.id}
            value={champion.name}
            sx={{ paddingLeft: "6px" }}
          >
            <Checkbox
              checked={checked}
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
            />
            {/* TODO: Add change of icon on hover */}
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing="4px"
              paddingLeft="8px"
            >
              <ChampionIcon
                id={champion.id}
                width={{ xs: "24px", md: "32px" }}
                height={{ xs: "24px", md: "32px" }}
              />
              <Typography
                fontFamily="Red Hat Display, sans-serif"
                fontSize={{ xs: "14px", md: "18px" }}
                fontWeight={
                  championFilter.indexOf(champion.name) > -1 ? 600 : 400
                }
              >
                {champion.name}
              </Typography>
            </Stack>
          </MenuItem>
        );
      })}
    </Select>
  );
};

export default ChampionSelect;
