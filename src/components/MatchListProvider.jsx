import Loading from "./Loading/Loading";
import MatchList from "./MatchList";
import matchListData from "../mock/match/list.json";
const MatchListProvider = ({
  data,
  error,
  loading,
  onPageIndexChange,
  pageIndex,
  onDeleteMatchClick,
}) => {
  if (loading) return <Loading />;
  if (error) return <p>error</p>;
  if (data)
    return (
      <MatchList
        itemList={matchListData.itemList}
        pageInfo={matchListData.pageInfo}
        onPageIndexChange={() => {}}
        pageIndex={0}
        onMatchDeleteClick={() => {}}
      />
    );
};

export default MatchListProvider;
