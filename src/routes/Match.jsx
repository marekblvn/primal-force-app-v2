import React from "react";
import { useParams } from "react-router-dom";
import useGetCommand from "../hooks/useGetCommand";
import { matchGet } from "../services/primal-force-api/match-service";
import MatchDetailProvider from "../components/MatchDetailProvider";
import ReturnHomeButton from "../components/ReturnHomeButton";

const Match = () => {
  const { matchId } = useParams();
  const { data, loading, error } = useGetCommand({
    command: matchGet,
    skipInitial: false,
    initialParams: { id: matchId },
  });
  return (
    <>
      <ReturnHomeButton />
      <MatchDetailProvider data={data} error={error} loading={loading} />
    </>
  );
};

export default Match;
