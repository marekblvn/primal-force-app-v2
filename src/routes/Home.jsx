import { useState } from "react";
import HorizontalBar from "../components/HorizontalBar";
import MatchListProvider from "../components/MatchListProvider";
import usePostCommand from "../hooks/usePostCommand";
import useGetCommand from "../hooks/useGetCommand";
import { enqueueSnackbar } from "notistack";
import {
  matchList,
  matchGet,
  matchAdd,
  matchDelete,
} from "../services/primal-force-api/match-service";
import matchListData from "../mock/match/list.json";
import Lsi from "../components/Lsi";

const Home = () => {
  const [championFilter, setChampionFilter] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [matchIdToDelete, setMatchIdToDelete] = useState(null);
  const [openAddMatchDialog, setOpenAddMatchDialog] = useState(false);
  const [openDeleteMatchDialog, setOpenDeleteMatchDialog] = useState(false);

  const {
    data: matchListData,
    error: matchListError,
    loading: matchListLoading,
    get: getMatchList,
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

  const handleOpenAddMatchDialog = () => setOpenAddMatchDialog(true);
  const handleCloseAddMatchDialog = () => setOpenAddMatchDialog(false);
  const handleOpenDeleteMatchDialog = (id) => {
    setMatchIdToDelete(id);
    setOpenDeleteMatchDialog(true);
  };
  const handleCloseDeleteMatchDialog = () => {
    setMatchIdToDelete(null);
    setOpenDeleteMatchDialog(false);
  };

  const handleChangePageIndex = (event, page) => {
    setPageIndex(page - 1);
    getMatchList({
      championNameList: championFilter,
      pageIndex: page - 1,
    });
  };

  const handleSearch = () =>
    getMatchList({ championNameList: championFilter, pageIndex });

  const handleChangeChampionFilter = (e) => {
    const {
      target: { value },
    } = e;
    setChampionFilter(value.sort());
  };
  const handleClearChampionFilter = () => {
    setChampionFilter([]);
    getMatchList();
  };

  const handleAddMatch = ({ routingCode, gameId }) => {
    postMatchAdd({
      params: { routingCode, gameId },
      successCallback: () => {},
      errorCallback: () => {},
    });
  };

  const handleAddMatchSuccess = () => {
    renderSuccessSnackbar(
      { en: "Match added!", cs: "Zápas přidán!" },
      handleCloseAddMatchDialog,
      getMatchList()
    );
  };

  const handleDeleteMatch = () => {
    postMatchDelete({ id: matchIdToDelete });
  };

  const handleDeleteMatchSuccess = () => {
    renderSuccessSnackbar(
      { en: "Match removed.", cs: "Západ odebrán." },
      handleCloseDeleteMatchDialog,
      getMatchList()
    );
  };

  const renderSuccessSnackbar = (lsi) => {
    enqueueSnackbar(<Lsi lsi={lsi} />, {
      variant: "success",
      autoHideDuration: 2000,
      preventDuplicate: true,
    });
  };

  const renderErrorSnackbar = (errorLsi) => {
    enqueueSnackbar(
      <Lsi
        lsi={
          errorLsi || {
            en: "Unexpected error ocurred",
            cs: "Nastala neočekávaná chyba",
          }
        }
      />,
      { variant: "error", autoHideDuration: 5000, preventDuplicate: true }
    );
  };

  return (
    <div>
      <HorizontalBar
        onSearch={handleSearch}
        championFilter={championFilter}
        onChampionFilterChange={handleChangeChampionFilter}
        onChampionFilterClear={handleClearChampionFilter}
      />
      <MatchListProvider
        data={matchListData}
        error={matchListError}
        loading={matchListLoading}
        onPageIndexChange={handleChangePageIndex}
        pageIndex={pageIndex}
        onDeleteMatchClick={handleOpenDeleteMatchDialog}
      />
    </div>
  );
};

export default Home;
