import Loading from "./Loading/Loading";
import MatchList from "./MatchList";
import Error from "./Error";
import { Container } from "@mui/material";
const MatchListProvider = ({
  data,
  error,
  loading,
  onPageIndexChange,
  pageIndex,
  onDeleteMatchClick,
}) => {
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
  if (data)
    return (
      <MatchList
        itemList={data.itemList}
        pageSize={data.pageInfo.pageSize}
        total={data.pageInfo.total}
        onPageIndexChange={onPageIndexChange}
        pageIndex={pageIndex}
        onMatchDeleteClick={onDeleteMatchClick}
      />
    );
};

export default MatchListProvider;
