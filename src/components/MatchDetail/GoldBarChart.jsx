import {
  CircularProgress,
  Icon,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import {
  BarChart,
  XAxis,
  YAxis,
  Bar,
  Cell,
  LabelList,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import BarChartIcon from "@mui/icons-material/BarChart";
import ChampionIconTick from "./ChampionIconTick";
import { useLsi } from "../../contexts";
import useGetCommand from "../../hooks/useGetCommand";
import { gold } from "../../services/primal-force-api/chart-service";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Lsi from "../Lsi";
import ChampionIcon from "../ChampionIcon";

const GoldBarChart = ({ matchId }) => {
  const { data, error, loading } = useGetCommand({
    command: gold,
    skipInitial: false,
    initialParams: { id: matchId },
  });
  const theme = useTheme();
  const { language } = useLsi();
  const { width: screenWidth } = useWindowDimensions();
  if (loading)
    return (
      <Stack
        direction="row"
        width="100%"
        height="100%"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress size={64} thickness={4.5} />;
      </Stack>
    );
  if (error)
    return (
      <Icon>
        <BarChartIcon sx={{ width: "100%", height: "100%" }} />
      </Icon>
    );
  if (!data) return null;

  const renderLabel = (props) => {
    const { value, width, x, y, fill } = props;
    return (
      <g>
        <text
          x={x + width / 2}
          y={y - 8}
          fill={`${fill}`}
          fontWeight={500}
          textAnchor="middle"
          fontFamily="Red Hat Display, sans-serif"
          fontSize={
            screenWidth > 1440
              ? "16px"
              : screenWidth > 1200
              ? "14px"
              : screenWidth > 1000
              ? "12px"
              : screenWidth > 900
              ? "10px"
              : screenWidth > 600
              ? "12px"
              : screenWidth > 400
              ? "10px"
              : language === "en"
              ? "8px"
              : "6px"
          }
        >
          {new Intl.NumberFormat(language === "en" ? "en-GB" : "cs-CZ").format(
            (value / 1000).toFixed(1)
          )}
          <Lsi lsi={{ en: "k", cs: " tis." }} />
        </text>
      </g>
    );
  };

  const renderTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const { goldEarned, championId, summonerName } = payload[0].payload;
      return (
        <Stack
          padding="4px"
          bgcolor={theme.palette.white.main}
          border={`solid 2px ${theme.palette.secondary.main}`}
          spacing="4px"
        >
          <Stack direction="row" spacing="8px" alignItems="center">
            <ChampionIcon
              id={championId}
              width={screenWidth > 450 ? "32px" : "20px"}
              height={screenWidth > 450 ? "32px" : "20px"}
            />
            <Typography
              fontFamily="Red Hat Display, sans-serif"
              fontWeight={700}
              fontSize="13px"
            >
              {summonerName}
            </Typography>
          </Stack>
          <Typography
            fontFamily="Red Hat Display, sans-serif"
            fontWeight={600}
            fontSize="12px"
            color={theme.palette.black.main}
            textAlign="center"
          >
            {new Intl.NumberFormat(
              language === "en" ? "en-GB" : "cs-CZ"
            ).format(goldEarned)}{" "}
            <Lsi lsi={{ en: " gold", cs: " zlata" }} />
          </Typography>
        </Stack>
      );
    }
  };

  return (
    <ResponsiveContainer width={"100%"} height={screenWidth > 600 ? 300 : 200}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          left:
            screenWidth > 900
              ? 0
              : screenWidth > 600
              ? -10
              : screenWidth > 400
              ? -15
              : -20,
        }}
      >
        <XAxis
          height={40}
          dataKey="championId"
          tick={<ChampionIconTick />}
          interval={0}
        />
        <YAxis
          tick={{
            fontSize:
              screenWidth > 1200
                ? "16px"
                : screenWidth > 600
                ? "14px"
                : screenWidth > 400
                ? "12px"
                : screenWidth <= 400
                ? "10px"
                : "16px",
          }}
          tickMargin={0}
        />
        <Tooltip content={renderTooltip} />
        <Bar dataKey="goldEarned">
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={
                entry.teamId === 100
                  ? theme.palette.blue.main
                  : theme.palette.red.main
              }
            />
          ))}
          <LabelList dataKey="goldEarned" content={renderLabel} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default GoldBarChart;
