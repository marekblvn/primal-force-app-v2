import {
  Container,
  Pagination,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Lsi from "./Lsi";
import useWindowDimensions from "../hooks/useWindowDimensions";
import MatchCard from "./MatchCard/MatchCard";

const MatchList = ({
  itemList,
  pageInfo,
  onPageIndexChange,
  pageIndex,
  onMatchDeleteClick,
}) => {
  const { width } = useWindowDimensions();
  const theme = useTheme();
  const { pageSize, total } = pageInfo;
  const renderMatches = (matches) =>
    matches.map((match, index) => {
      return (
        <MatchCard
          key={index}
          match={match}
          onDeleteClick={onMatchDeleteClick}
        />
      );
    });

  if (!itemList?.length) {
    return (
      <Container
        sx={{
          minHeight: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          color={theme.palette.secondary.light}
          fontFamily="Red Hat Display, sans-serif"
          fontSize="32px"
          textTransform="uppercase"
          sx={{ textShadow: `${theme.palette.primary.main} 1px 0 10px` }}
          fontWeight={700}
          letterSpacing="2px"
          textAlign="center"
        >
          <Lsi
            lsi={{
              en: "No matches found",
              cs: "Nepodařilo se najít žádné zápasy",
            }}
          />
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ padding: "16px 0px 12px 16px" }}>
      <Stack
        direction="column"
        spacing="16px"
        alignItems="center"
        justifyContent="center"
        padding={0}
      >
        {renderMatches(itemList)}
        <Pagination
          page={pageIndex + 1}
          count={Math.ceil(total / pageSize)}
          onChange={onPageIndexChange}
          color="primary"
          size={width > 900 ? "medium" : "small"}
        />
      </Stack>
    </Container>
  );
};

export default MatchList;
