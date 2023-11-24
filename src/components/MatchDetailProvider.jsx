import Loading from "./Loading/Loading";
import { Container } from "@mui/material";
import Error from "./Error";
import MatchDetail from "./MatchDetail";

const MatchDetailProvider = ({ data, loading, error }) => {
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
  if (data) return <MatchDetail match={data} />;
  return null;
};

export default MatchDetailProvider;
