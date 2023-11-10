import React from "react";
import { useParams } from "react-router-dom";
import HorizontalBar from "../components/HorizontalBar";
import useGetCommand from "../hooks/useGetCommand";
import { matchGet } from "../services/primal-force-api/match-service";

const Match = () => {
  const { matchId } = useParams();
  const { data, loading, error } = useGetCommand({
    command: matchGet,
    skipInitial: false,
    initialParams: { id: matchId },
  });
  return (
    <>
      <HorizontalBar />
      {/* MatchDetailProvider */}
    </>
  );
};

export default Match;
