import { useState } from "react";
import HorizontalBar from "../components/HorizontalBar";

const Home = () => {
  const [championQuery, setChampionQuery] = useState([]);
  const handleChangeChampionQuery = (e) => {
    console.log(e);
  };
  return (
    <div>
      <HorizontalBar
        championQuery={championQuery}
        onChampionQueryChange={handleChangeChampionQuery}
      />
      <p>Home</p>
    </div>
  );
};

export default Home;
