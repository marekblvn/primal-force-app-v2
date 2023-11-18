import getChampionAssetName from "../../utils/champion-asset";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const ChampionIconTick = ({ x, y, payload }) => {
  const { width } = useWindowDimensions();
  return (
    <g transform={`translate(${x},${y})`}>
      <image
        height={width > 600 ? "32px" : width > 400 ? "20px" : "14px"}
        width={width > 600 ? "32px" : width > 400 ? "20px" : "14px"}
        x={width > 600 ? -16 : width > 400 ? -10 : -7}
        y={0}
        textAnchor="middle"
        xlinkHref={getChampionAssetName(payload.value)}
      />
    </g>
  );
};

export default ChampionIconTick;
