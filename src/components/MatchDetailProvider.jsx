import Loading from "./Loading/Loading";
import Error from "./Error";
import MatchDetail from "./MatchDetail";

const MatchDetailProvider = ({ data, loading, error }) => {
  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data) return <MatchDetail match={data} />;
  return null;
};

export default MatchDetailProvider;
