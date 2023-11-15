import { Badge, Grid, Stack, Typography, useTheme } from "@mui/material";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Lsi from "../Lsi";
import ChampionIcon from "../ChampionIcon";
import SummonerSpellIcon from "../SummonerSpellIcon";
import ItemIcon from "../ItemIcon";
import { useLsi } from "../../contexts";
import PerkIcon from "../PerkIcon";

// TODO: Remove Gold column, add name column !! summonerName is more important and there is not enough place for both

const TeamTable = ({ participants, side }) => {
  const { width } = useWindowDimensions();
  const theme = useTheme();
  const { language } = useLsi();
  const goldFormat = new Intl.NumberFormat(
    language === "en" ? "en-GB" : "cs-CZ"
  );
  return (
    <Grid
      item
      container
      xs={12}
      md={6}
      columns={12}
      sx={{ paddingBottom: { xs: "2px", sm: "4px", md: "8px" } }}
    >
      <Grid
        item
        container
        direction={side === "blue" ? { xs: "row", md: "row-reverse" } : "row"}
        xs={12}
      >
        <Grid item xs={2}></Grid>
        <Grid item xs={width >= 400 ? 2 : 1} sm={2} md={1} xl={2}></Grid>
        <Grid item xs={1} md={2} xl={2}>
          <Typography
            fontFamily="Red Hat Display, sans-serif"
            textAlign={{ xs: "right", sm: "center" }}
            fontSize={{
              xs: width >= 350 ? "10px" : "7px",
              sm: width >= 700 ? "14px" : "12px",
              md: width >= 1100 ? "14px" : "12px",
              lg: width >= 1400 ? "15px" : "12px",
              xl: "20px",
            }}
          >
            <Lsi lsi={{ en: "K/D/A", cs: "K/D/A" }} />
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography
            fontFamily="Red Hat Display, sans-serif"
            textAlign={{ xs: "right", sm: "center" }}
            fontSize={{
              xs: width >= 350 ? "10px" : "7px",
              sm: width >= 700 ? "14px" : "12px",
              md: width >= 1100 ? "14px" : "12px",
              lg: width >= 1400 ? "15px" : "12px",
              xl: "20px",
            }}
          >
            <Lsi lsi={{ en: "CS", cs: "CS" }} />
          </Typography>
        </Grid>
        <Grid item xs={width >= 400 ? 6 : 7} sm={6} xl={5}>
          <Typography
            fontFamily="Red Hat Display, sans-serif"
            textAlign="center"
            fontSize={{
              xs: width >= 350 ? "10px" : "7px",
              sm: "12px",
              md: width >= 1100 ? "14px" : "12px",
              lg: width >= 1400 ? "15px" : "12px",
              xl: "20px",
            }}
          >
            <Lsi lsi={{ en: "Items", cs: "Předměty" }} />
          </Typography>
        </Grid>
      </Grid>
      {participants.map((p, index) => (
        <Grid
          key={p.championId}
          item
          container
          direction={side === "blue" ? { xs: "row", md: "row-reverse" } : "row"}
          xs={12}
          mb="8px"
        >
          <Grid
            item
            xs={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Stack
              direction={
                side === "blue" ? { xs: "row", md: "row-reverse" } : "row"
              }
            >
              <Badge
                badgeContent={p.champLevel}
                max={99}
                anchorOrigin={{
                  horizontal:
                    side === "blue"
                      ? width >= 900
                        ? "right"
                        : "left"
                      : "left",
                  vertical: "top",
                }}
                color="primary"
                sx={{
                  "& .MuiBadge-badge": {
                    fontSize: { xs: "6px", sm: "10px" },
                    padding: "4px",
                    width: { xs: "10px", sm: "14px", md: "15px" },
                    height: { xs: "10px", sm: "14px", md: "15px" },
                    minWidth: "8px",
                    left: {
                      xs: 0,
                      md: side === "blue" ? "15px" : "5px",
                      lg: "auto",
                    },
                  },
                }}
              >
                <ChampionIcon
                  id={p.championId}
                  width={{ xs: "22px", sm: "38px", md: "34px", lg: "42px" }}
                  height={{ xs: "22px", sm: "38px", md: "34px", lg: "42px" }}
                  borderRadius={{
                    xs: "0 0 0 2px",
                    md: side === "blue" ? "0 0 4px 0" : "0 0 0 4px",
                  }}
                />
              </Badge>
              <Stack
                direction="column"
                bgcolor={theme.palette.primary.main}
                spacing="3px"
                borderRadius={{
                  xs: "0 2px 2px 0",
                  md: side === "blue" ? "4px 0 0 4px" : "0 4px 4px 0",
                }}
              >
                <PerkIcon
                  id={p.perks[0].styles[0].selections[0].perk}
                  width={{ xs: "9px", sm: "17px", md: "15px", lg: "19px" }}
                  height={{ xs: "9px", sm: "17px", md: "15px", lg: "19px" }}
                />
                <PerkIcon
                  id={p.perks[0].styles[1].style}
                  width={{ xs: "9px", sm: "17px", md: "15px", lg: "19px" }}
                  height={{ xs: "9px", sm: "17px", md: "15px", lg: "19px" }}
                />
              </Stack>
              <Stack
                direction="column"
                spacing="2px"
                padding={{
                  xs: "0 0 0 1px",
                  md: side === "blue" ? "0 2px 0 0" : "0 0 0 2px",
                }}
              >
                <SummonerSpellIcon
                  id={p.summoner1Id}
                  width={{ xs: "10px", sm: "18px", md: "16px", lg: "20px" }}
                  height={{ xs: "10px", sm: "18px", md: "16px", lg: "20px" }}
                  borderRadius={{ xs: "2px", sm: "4px" }}
                />
                <SummonerSpellIcon
                  id={p.summoner2Id}
                  width={{ xs: "10px", sm: "18px", md: "16px", lg: "20px" }}
                  height={{ xs: "10px", sm: "18px", md: "16px", lg: "20px" }}
                  borderRadius={{ xs: "2px", sm: "4px" }}
                />
              </Stack>
            </Stack>
          </Grid>
          <Grid
            item
            xs={width >= 400 ? 2 : 1}
            sm={2}
            md={1}
            xl={2}
            display="flex"
            justifyContent={{ xs: "flex-start", sm: "center" }}
            alignItems="center"
          >
            <Typography
              textAlign={{ xs: "left", sm: "center" }}
              noWrap
              maxWidth={{ xs: width >= 450 ? "45px" : "90%", sm: "100%" }}
              fontSize={{
                xs: width >= 400 ? "8px" : "6px",
                sm: width >= 700 ? "10px" : "9px",
                lg: "12px",
                xl: "16px",
              }}
            >
              {p.summonerName}
            </Typography>
          </Grid>
          <Grid
            item
            xs={1}
            md={2}
            xl={2}
            display="flex"
            justifyContent={{ xs: "flex-end", sm: "center" }}
            alignItems="center"
          >
            <Typography
              textAlign={{ xs: "right", sm: "center" }}
              fontSize={{
                xs: width >= 400 ? "10px" : "6px",
                sm: width >= 700 ? "14px" : "12px",
                md: width >= 1100 ? "16px" : "14px",
                lg: width >= 1400 ? "15px" : "12px",
                xl: "20px",
              }}
            >
              {p.kills + "/" + p.deaths + "/" + p.assists}
            </Typography>
          </Grid>
          <Grid
            item
            xs={1}
            display="flex"
            justifyContent={{ xs: "flex-end", sm: "center" }}
            alignItems="center"
          >
            <Typography
              textAlign={{ xs: "right", sm: "center" }}
              fontSize={{
                xs: width >= 400 ? "10px" : "6px",
                sm: width >= 700 ? "14px" : "12px",
                md: width >= 1100 ? "16px" : "14px",
                lg: width >= 1400 ? "15px" : "13px",
                xl: "20px",
              }}
            >
              {p.totalMinionsKilled + p.neutralMinionsKilled}
            </Typography>
          </Grid>
          <Grid
            item
            xs={width >= 400 ? 6 : 7}
            sm={6}
            xl={5}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Stack
              direction={{
                xs: "row",
                md: side === "blue" ? "row-reverse" : "row",
              }}
              justifyContent="center"
              alignItems="center"
              spacing={{
                xs: width >= 500 ? "8px" : width >= 350 ? "4px" : "2px",
                md: "2px",
                lg: "4px",
                xl: "8px",
              }}
            >
              <ItemIcon
                itemId={p.item0}
                width={{
                  xs: width >= 450 ? "22px" : "14px",
                  sm: "28px",
                  md: "24px",
                  lg: "32px",
                }}
                height={{
                  xs: width >= 450 ? "22px" : "14px",
                  sm: "28px",
                  md: "24px",
                  lg: "32px",
                }}
              />
              <ItemIcon
                itemId={p.item1}
                width={{
                  xs: width >= 450 ? "22px" : "14px",
                  sm: "28px",
                  md: "24px",
                  lg: "32px",
                }}
                height={{
                  xs: width >= 450 ? "22px" : "14px",
                  sm: "28px",
                  md: "24px",
                  lg: "32px",
                }}
              />
              <ItemIcon
                itemId={p.item2}
                width={{
                  xs: width >= 450 ? "22px" : "14px",
                  sm: "28px",
                  md: "24px",
                  lg: "32px",
                }}
                height={{
                  xs: width >= 450 ? "22px" : "14px",
                  sm: "28px",
                  md: "24px",
                  lg: "32px",
                }}
              />
              <ItemIcon
                itemId={p.item3}
                width={{
                  xs: width >= 450 ? "22px" : "14px",
                  sm: "28px",
                  md: "24px",
                  lg: "32px",
                }}
                height={{
                  xs: width >= 450 ? "22px" : "14px",
                  sm: "28px",
                  md: "24px",
                  lg: "32px",
                }}
              />
              <ItemIcon
                itemId={p.item4}
                width={{
                  xs: width >= 450 ? "22px" : "14px",
                  sm: "28px",
                  md: "24px",
                  lg: "32px",
                }}
                height={{
                  xs: width >= 450 ? "22px" : "14px",
                  sm: "28px",
                  md: "24px",
                  lg: "32px",
                }}
              />
              <ItemIcon
                itemId={p.item5}
                width={{
                  xs: width >= 450 ? "22px" : "14px",
                  sm: "28px",
                  md: "24px",
                  lg: "32px",
                }}
                height={{
                  xs: width >= 450 ? "22px" : "14px",
                  sm: "28px",
                  md: "24px",
                  lg: "32px",
                }}
              />
              <Badge
                badgeContent={p.visionScore}
                max={999}
                anchorOrigin={{
                  horizontal:
                    side === "blue"
                      ? width >= 900
                        ? "left"
                        : "right"
                      : "right",
                  vertical: "bottom",
                }}
                sx={{
                  "& .MuiBox-root": {
                    margin: 0,
                  },
                  "& .MuiBadge-badge": {
                    fontSize: { xs: "6px", sm: "8px", md: "9px" },
                    padding: "6px",
                    width: { xs: "18px", sm: "20px", md: "18px" },
                    height: { xs: "14px", sm: "16px", md: "14px" },
                    minWidth: "16px",
                    minHeight: "12px",
                    backgroundColor: `${theme.palette.white.dark} !important`,
                  },
                }}
              >
                <ItemIcon
                  itemId={p.item6}
                  width={{ xs: "12px", sm: "18px", md: "14px", lg: "20px" }}
                  height={{ xs: "12px", sm: "18px", md: "14px", lg: "20px" }}
                  sx={{
                    margin: {
                      xs: "0 0 0 4px",
                      md: side === "blue" ? "0 4px 0 0" : "0 0 0 4px",
                    },
                  }}
                />
              </Badge>
            </Stack>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default TeamTable;
