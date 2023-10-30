import { Container, Pagination, Stack } from "@mui/material";
import useWindowDimensions from "../hooks/useWindowDimensions";

const MatchList = ({
  itemList,
  pageInfo,
  onPageIndexChange,
  pageIndex,
  onMatchDeleteClick,
}) => {
  const { width, height } = useWindowDimensions();
  const { pageSize, total } = pageInfo;
  const renderMatches = (matches) =>
    matches.map((match, index) => {
      return <p>Match Card</p>;
    });

  if (!itemList?.length) {
    return <p>No Data</p>;
  }

  return (
    <Container sx={{ padding: "16px 0px 0px 16px" }}>
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
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            paddingBottom: "8px",
          }}
        />
      </Stack>
    </Container>
  );
};

export default MatchList;
