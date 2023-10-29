import {
  Checkbox,
  useTheme,
  Select,
  MenuItem,
  Typography,
  Stack,
  Input,
  Tooltip,
  IconButton,
} from "@mui/material";
import ChampionIcon from "./ChampionIcon";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Lsi from "./Lsi";
import champions from "../static/data/champions.json";
import useWindowDimensions from "../hooks/useWindowDimensions";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";

const SearchBar = ({
  championFilter,
  onChampionFilterChange,
  onChampionFilterClear,
}) => {
  const { width, height } = useWindowDimensions();
  const selectToScreenProportion = 0.45;
  const championIconSize = width > 600 ? 32 : 18; //px
  const maxGallerySize =
    Math.floor((width * selectToScreenProportion) / (championIconSize + 16)) -
    1;
  const theme = useTheme();
  return (
    <Select
      sx={{
        width: `${selectToScreenProportion * 100}%`,
      }}
      SelectDisplayProps={{
        style: { height: width > 600 ? "36px" : "24px" },
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
          padding: "4px 4px 4px 6px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        },
      }}
      renderValue={(selected) => {
        if (!selected.length) {
          return (
            <Typography
              paddingLeft="6px"
              paddingRight="32px"
              width="100%"
              noWrap
              fontFamily="Red Hat Display, sans-serif"
              fontStyle="italic"
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
              <ChampionIcon id={champion.id} width="32px" height="32px" />
              <Typography
                fontFamily="Red Hat Display, sans-serif"
                fontSize="18px"
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

export default SearchBar;
