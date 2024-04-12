import {
  CircularProgress,
  Icon,
  Stack,
  useTheme,
  Typography,
} from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import ChampionIcon from "../ChampionIcon";
import Lsi from "../Lsi";
import useGetCommand from "../../hooks/useGetCommand";
import { matchGetDamage } from "../../services/primal-force-api/match-service";
import { useLsi } from "../../contexts";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import {
  Bar,
  BarChart,
  Cell,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ChampionIconTick from "./ChampionIconTick";

const DamageBarChart = ({ matchId }) => {
  const { data, error, loading } = useGetCommand({
    command: matchGetDamage,
    skipInitial: false,
    initialParams: { matchId },
  });
  const theme = useTheme();
  const { language } = useLsi();
  const { width: screenWidth } = useWindowDimensions();
  if (loading) {
    return (
      <Stack
        direction="row"
        width="100%"
        height="100%"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress size={64} thickness={4.5} />
      </Stack>
    );
  }
  if (error) {
    return (
      <Icon>
        <BarChartIcon sx={{ width: "100%", height: "100%" }} />
      </Icon>
    );
  }
  if (!data) return null;

  const renderTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const {
        physicalDamageDealtToChampions,
        magicDamageDealtToChampions,
        trueDamageDealtToChampions,
        totalDamageDealtToChampions,
        championId,
        summonerName,
      } = payload[0].payload;
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
          <Stack direction="row" spacing="6px" alignItems="center">
            <Typography
              fontFamily="Red Hat Display, sans-serif"
              fontWeight={700}
              fontSize="12px"
              color={"#C0392B"}
            >
              <Lsi lsi={{ en: "Physical damage:", cs: "Fyzické poškození:" }} />
            </Typography>
            <Typography
              fontFamily="Red Hat Display, sans-serif"
              fontWeight={600}
              fontSize="12px"
              color={theme.palette.black.main}
            >
              {new Intl.NumberFormat(
                language === "en" ? "en-GB" : "cs-CZ"
              ).format(physicalDamageDealtToChampions)}{" "}
            </Typography>
            <Typography
              fontFamily="Red Hat Display, sans-serif"
              fontWeight={400}
              fontSize="11px"
              color={theme.palette.black.main}
            >
              (
              {(
                (physicalDamageDealtToChampions / totalDamageDealtToChampions) *
                100
              ).toFixed(1) + "%"}
              )
            </Typography>
          </Stack>
          <Stack direction="row" spacing="6px" alignItems="center">
            <Typography
              fontFamily="Red Hat Display, sans-serif"
              fontWeight={700}
              fontSize="12px"
              color={"#217DBB"}
            >
              <Lsi lsi={{ en: "Magic damage:", cs: "Magické poškození:" }} />
            </Typography>
            <Typography
              fontFamily="Red Hat Display, sans-serif"
              fontWeight={600}
              fontSize="12px"
              color={theme.palette.black.main}
            >
              {new Intl.NumberFormat(
                language === "en" ? "en-GB" : "cs-CZ"
              ).format(magicDamageDealtToChampions)}{" "}
            </Typography>
            <Typography
              fontFamily="Red Hat Display, sans-serif"
              fontWeight={400}
              fontSize="11px"
              color={theme.palette.black.main}
            >
              (
              {(
                (magicDamageDealtToChampions / totalDamageDealtToChampions) *
                100
              ).toFixed(1) + "%"}
              )
            </Typography>
          </Stack>
          <Stack direction="row" spacing="6px" alignItems="center">
            <Typography
              fontFamily="Red Hat Display, sans-serif"
              fontWeight={700}
              fontSize="12px"
              color={"#49525E"}
            >
              <Lsi lsi={{ en: "True damage:", cs: "Přímé poškození:" }} />
            </Typography>
            <Typography
              fontFamily="Red Hat Display, sans-serif"
              fontWeight={600}
              fontSize="12px"
              color={theme.palette.black.main}
            >
              {new Intl.NumberFormat(
                language === "en" ? "en-GB" : "cs-CZ"
              ).format(trueDamageDealtToChampions)}{" "}
            </Typography>
            <Typography
              fontFamily="Red Hat Display, sans-serif"
              fontWeight={400}
              fontSize="11px"
              color={theme.palette.black.main}
            >
              (
              {(
                (trueDamageDealtToChampions / totalDamageDealtToChampions) *
                100
              ).toFixed(1) + "%"}
              )
            </Typography>
          </Stack>
          <Stack direction="row" spacing="6px" alignItems="center">
            <Typography
              fontFamily="Red Hat Display, sans-serif"
              fontWeight={700}
              fontSize="13px"
              color={theme.palette.black.main}
            >
              <Lsi lsi={{ en: "Total damage:", cs: "Celkové poškození:" }} />
            </Typography>
            <Typography
              fontFamily="Red Hat Display, sans-serif"
              fontWeight={600}
              fontSize="13px"
              color={theme.palette.black.main}
            >
              {new Intl.NumberFormat(
                language === "en" ? "en-GB" : "cs-CZ"
              ).format(totalDamageDealtToChampions)}{" "}
            </Typography>
          </Stack>
        </Stack>
      );
    }
  };

  const renderLabel = (props) => {
    const { value, width, x, y, fill } = props;
    return (
      <g>
        <text
          x={x + width / 2}
          y={y - 8}
          fill={theme.palette.black.main}
          fontWeight={400}
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
        <Bar dataKey="trueDamageDealtToChampions" stackId="a">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill="#718093" strokeWidth="3px" />
          ))}
        </Bar>
        <Bar dataKey="magicDamageDealtToChampions" stackId="a">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill="#3498DB" strokeWidth="3px" />
          ))}
        </Bar>
        <Bar dataKey="physicalDamageDealtToChampions" stackId="a">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill="#E74C3C" strokeWidth="3px" />
          ))}
          <LabelList
            dataKey="totalDamageDealtToChampions"
            content={renderLabel}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DamageBarChart;
