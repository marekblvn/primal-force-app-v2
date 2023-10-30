import Loading from "./Loading/Loading";
import MatchList from "./MatchList";
import Error from "./Error";
const MatchListProvider = ({
  data,
  error,
  loading,
  onPageIndexChange,
  pageIndex,
  onDeleteMatchClick,
}) => {
  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <MatchList
        itemList={data.itemList}
        pageInfo={data.pageInfo}
        onPageIndexChange={() => {}}
        pageIndex={0}
        onMatchDeleteClick={() => {}}
      />
    );
};

export default MatchListProvider;
