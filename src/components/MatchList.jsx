import { Container, Pagination, Typography, useTheme } from "@mui/material";
import Lsi from "./Lsi";
import useWindowDimensions from "../hooks/useWindowDimensions";
import MatchCard from "./MatchCard/MatchCard";

const MatchList = ({
  itemList,
  pageSize = 0,
  total = 0,
  onPageIndexChange,
  pageIndex,
  onMatchDeleteClick,
}) => {
  const { width } = useWindowDimensions();
  const theme = useTheme();
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
    <Container
      sx={{
        paddingTop: "16px",
        paddingBottom: "14px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        justifyContent: "center",
        alignItems: "center",
      }}
      disableGutters={true}
    >
      {renderMatches(itemList)}
      <Pagination
        page={pageIndex + 1}
        count={Math.ceil(total / pageSize)}
        onChange={onPageIndexChange}
        color="primary"
        size={width > 900 ? "medium" : "small"}
      />
    </Container>
  );
};

export default MatchList;
