import { Toolbar } from "@mui/material";
import ActionButton from "./ActionButton";
import ChampionSelect from "./ChampionSelect";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
const SearchBar = ({
  championFilter,
  onChampionFilterChange,
  onChampionFilterClear,
  onSearch,
}) => {
  return (
    <Toolbar
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "45%",
        padding: 0,
        margin: 0,
      }}
    >
      <ActionButton
        onClick={onSearch}
        icon={
          <SearchIcon
            sx={{
              width: { xs: "18px", sm: "24px" },
              height: { xs: "18px", sm: "24px" },
            }}
          />
        }
        borderRadius={"8px 0 0 8px"}
      />
      <ChampionSelect
        championFilter={championFilter}
        onChampionFilterChange={onChampionFilterChange}
      />
      <ActionButton
        icon={
          <ClearIcon
            sx={{
              width: { xs: "18px", sm: "24px" },
              height: { xs: "18px", sm: "24px" },
            }}
          />
        }
        borderRadius={"0 8px 8px 0"}
        onClick={onChampionFilterClear}
        hidden={!championFilter.length}
      />
    </Toolbar>
  );
};

export default SearchBar;
