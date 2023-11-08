import Loading from "./Loading/Loading";
import MatchList from "./MatchList";
import Error from "./Error";
import { Container, Pagination } from "@mui/material";
import useWindowDimensions from "../hooks/useWindowDimensions";
const MatchListProvider = ({
  data,
  error,
  loading,
  onPageIndexChange,
  onDeleteMatchClick,
}) => {
  const { width } = useWindowDimensions();
  if (loading)
    return (
      <Container
        sx={{
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loading />
      </Container>
    );
  if (error) return <Error error={error} />;
  if (data) {
    const {
      itemList,
      pageInfo: { pageIndex, pageSize, total },
    } = data;
    return (
      <>
        <MatchList
          itemList={itemList}
          pageSize={pageSize}
          total={total}
          onPageIndexChange={onPageIndexChange}
          pageIndex={pageIndex}
          onMatchDeleteClick={onDeleteMatchClick}
        />
        <Pagination
          shape="rounded"
          page={pageIndex + 1}
          count={Math.ceil(total / pageSize)}
          onChange={onPageIndexChange}
          color="primary"
          size={width > 900 ? "medium" : "small"}
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            paddingBottom: "8px",
          }}
        />
      </>
    );
  }
};

export default MatchListProvider;
