import ChampionIcon from "../ChampionIcon";

const Ban = ({ championId }) => {
  return (
    <ChampionIcon
      id={championId}
      width={{ xs: "14px", sm: "18px", md: "24px", lg: "28px" }}
      height={{ xs: "14px", sm: "18px", md: "24px", lg: "28px" }}
      border="solid 1px red"
    />
  );
};

export default Ban;
