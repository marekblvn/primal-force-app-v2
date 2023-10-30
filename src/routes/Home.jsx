import { useState } from "react";
import HorizontalBar from "../components/HorizontalBar";
import MatchListProvider from "../components/MatchListProvider";
import usePostCommand from "../hooks/usePostCommand";
import useGetCommand from "../hooks/useGetCommand";
import {
  matchList,
  matchGet,
  matchAdd,
  matchDelete,
} from "../services/primal-force-api/match-service";
import matchListData from "../mock/match/list.json";

const Home = () => {
  const [championFilter, setChampionFilter] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);

  const {
    data: matchListData,
    error: matchListError,
    loading: matchListLoading,
    get,
  } = useGetCommand({
    command: matchList,
    skipInitial: false,
    initialParams: { championNameList: championFilter, pageIndex },
  });

  const {
    data: matchAddData,
    loading: matchAddLoading,
    error: matchAddError,
    post: postMatchAdd,
  } = usePostCommand({ command: matchAdd });

  const {
    data: matchDeleteData,
    loading: matchDeleteLoading,
    error: matchDeleteError,
    post: postMatchDelete,
  } = usePostCommand({ command: matchDelete });

  const handleSearch = () =>
    get({ championNameList: championFilter, pageIndex });

  const handleChangeChampionFilter = (e) => {
    const {
      target: { value },
    } = e;
    setChampionFilter(value.sort());
  };
  const handleClearChampionFilter = () => setChampionFilter([]);

  const handleAddMatch = ({ routingCode, gameId }) => {
    postMatchAdd({
      params: { routingCode, gameId },
      successCallback: () => {},
      errorCallback: () => {},
    });
  };

  return (
    <div>
      <HorizontalBar
        championFilter={championFilter}
        onChampionFilterChange={handleChangeChampionFilter}
        onChampionFilterClear={handleClearChampionFilter}
      />
      <MatchListProvider data={matchListData} />
    </div>
  );
};

export default Home;
