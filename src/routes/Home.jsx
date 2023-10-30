import { useState } from "react";
import HorizontalBar from "../components/HorizontalBar";
import MatchListProvider from "../components/MatchListProvider";

const Home = () => {
  const [championFilter, setChampionFilter] = useState([]);
  const handleChangeChampionFilter = (e) => {
    const {
      target: { value },
    } = e;
    setChampionFilter(value.sort());
  };
  const handleClearChampionFilter = () => setChampionFilter([]);
  return (
    <div>
      <HorizontalBar
        championFilter={championFilter}
        onChampionFilterChange={handleChangeChampionFilter}
        onChampionFilterClear={handleClearChampionFilter}
      />
      <MatchListProvider data={true} />
    </div>
  );
};

export default Home;
