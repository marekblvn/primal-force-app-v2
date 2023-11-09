import { useState } from "react";
import HorizontalBar from "../components/HorizontalBar";
import MatchListProvider from "../components/MatchListProvider";
import usePostCommand from "../hooks/usePostCommand";
import useGetCommand from "../hooks/useGetCommand";
import { enqueueSnackbar } from "notistack";
import {
  matchList,
  matchAdd,
  matchDelete,
} from "../services/primal-force-api/match-service";
import Lsi from "../components/Lsi";
import DeleteModeProvider from "../contexts/delete-mode/delete-mode-provider";
import DeleteMatchDialog from "../components/DeleteMatchDialog";
import AddMatchButton from "../components/AddMatchButton";
import AddMatchModal from "../components/AddMatchModal";
import SearchBar from "../components/SearchBar/SearchBar";
import Menu from "../components/Menu";

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

  const { loading: matchAddLoading, post: postMatchAdd } = usePostCommand({
    command: matchAdd,
  });

  const { loading: matchDeleteLoading, post: postMatchDelete } = usePostCommand(
    { command: matchDelete }
  );

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
    postMatchAdd(
      { routingCode, gameId },
      handleAddMatchSuccess,
      renderErrorSnackbar
    );
  };

  const handleAddMatchSuccess = () => {
    renderSuccessSnackbar({
      en: "New match has been added!",
      cs: "Byl přidán nový zápas!",
    });
    handleCloseAddMatchDialog();
    getMatchList();
  };

  const handleDeleteMatch = () => {
    postMatchDelete(
      { id: matchIdToDelete },
      handleDeleteMatchSuccess,
      renderErrorSnackbar
    );
  };

  const handleDeleteMatchSuccess = () => {
    renderSuccessSnackbar({
      en: "The match has been removed.",
      cs: "Zápas byl odebrán.",
    });
    handleCloseDeleteMatchDialog();
    getMatchList();
  };

  const renderSuccessSnackbar = (lsi) => {
    enqueueSnackbar(<Lsi lsi={lsi} />, {
      variant: "success",
      autoHideDuration: 2000,
      preventDuplicate: true,
    });
  };

  const renderErrorSnackbar = (error) => {
    const errorLsi = error?.message;
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
    <DeleteModeProvider>
      <HorizontalBar>
        <SearchBar
          onSearch={handleSearch}
          championFilter={championFilter}
          onChampionFilterChange={handleChangeChampionFilter}
          onChampionFilterClear={handleClearChampionFilter}
        />
        <Menu />
      </HorizontalBar>
      <MatchListProvider
        data={matchListData}
        error={matchListError}
        loading={matchListLoading}
        onPageIndexChange={handleChangePageIndex}
        pageIndex={pageIndex}
        onDeleteMatchClick={handleOpenDeleteMatchDialog}
      />
      <AddMatchButton onClick={handleOpenAddMatchDialog} />
      <DeleteMatchDialog
        open={openDeleteMatchDialog}
        onClose={handleCloseDeleteMatchDialog}
        onConfirm={handleDeleteMatch}
        loading={matchDeleteLoading}
      />
      <AddMatchModal
        open={openAddMatchDialog}
        onClose={handleCloseAddMatchDialog}
        onConfirm={handleAddMatch}
        loading={matchAddLoading}
      />
    </DeleteModeProvider>
  );
};

export default Home;
