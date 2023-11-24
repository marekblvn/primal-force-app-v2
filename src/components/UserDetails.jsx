import {
  Box,
  Container,
  Grid,
  IconButton,
  Skeleton,
  Stack,
  useTheme,
} from "@mui/material";
import Error from "./Error";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import UserDetailItem from "./UserDetailItem";
import { useUserDetails } from "../contexts";

const UserDetails = () => {
  const theme = useTheme();
  const { loading, error, data, changeUserPicture } = useUserDetails();
  if (error) {
    return <Error error={error} />;
  }
  return (
    <Container
      sx={{
        width: {
          xs: "310px",
          sm: "500px",
          md: "600px",
          lg: "700px",
          xl: "700px",
        },
      }}
    >
      <Stack
        direction="column"
        bgcolor={theme.palette.white.main}
        padding="8px"
        margin="8px"
        alignItems="center"
        borderRadius="12px"
      >
        {loading ? (
          <>
            <Skeleton variant="rounded">
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  padding: "8px",
                }}
              >
                <Box
                  width={{ xs: "64px", md: "96px", lg: "128px" }}
                  height={{ xs: "64px", md: "96px", lg: "128px" }}
                />
              </div>
            </Skeleton>
            <Container
              sx={{
                paddingTop: { xs: "16px", sm: "20px", md: "24px" },
                paddingBottom: { xs: "16px", sm: "20px", md: "24px" },
              }}
            >
              <Grid container columns={13} rowGap="16px">
                <Grid item xs={13} sm={6}>
                  <Skeleton width="40%" height="24px" />
                  <Skeleton width="100%" height="22px" />
                </Grid>
                <Grid item xs={0} sm={1}></Grid>
                <Grid item xs={13} sm={6}>
                  <Skeleton width="40%" height="24px" />
                  <Skeleton width="100%" height="22px" />
                </Grid>
                <Grid item xs={13} sm={6}>
                  <Skeleton width="40%" height="24px" />
                  <Skeleton width="100%" height="22px" />
                </Grid>
              </Grid>
            </Container>
          </>
        ) : (
          <>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                padding: "8px",
              }}
            >
              <Box
                component="img"
                alt=""
                src={data.picture}
                width={{ xs: "64px", md: "96px", lg: "128px" }}
                height={{ xs: "64px", md: "96px", lg: "128px" }}
                zIndex={0}
                borderRadius={{ xs: "4px", md: "8px", lg: "14px" }}
                border={`solid 2px ${theme.palette.secondary.main}`}
                sx={{
                  "&:hover": {
                    borderColor: theme.palette.primary.main,
                  },
                }}
              />
              <IconButton
                sx={{
                  position: "absolute",
                  width: { xs: "64px", md: "96px", lg: "128px" },
                  height: { xs: "64px", md: "96px", lg: "128px" },
                  zIndex: 1,
                  color: theme.palette.white.main,
                  borderRadius: 0,
                  opacity: 0,
                  "&:hover": {
                    opacity: 1,
                  },
                }}
                onClick={() =>
                  changeUserPicture(
                    "https://ddragon.leagueoflegends.com/cdn/13.23.1/img/profileicon/0.png"
                  )
                }
              >
                <ImageSearchIcon
                  sx={{
                    height: { xs: "32px", md: "40px", lg: "64px" },
                    width: { xs: "32px", md: "40px", lg: "64px" },
                  }}
                />
              </IconButton>
            </div>
            <Container
              sx={{
                paddingTop: { xs: "16px", sm: "20px", md: "24px" },
                paddingBottom: { xs: "16px", sm: "20px", md: "24px" },
              }}
            >
              <Grid container columns={13} rowGap="16px">
                <Grid item xs={13} sm={6}>
                  <UserDetailItem
                    title={{ en: "Nickname", cs: "Přezdívka" }}
                    value={data.nickname}
                  />
                </Grid>
                <Grid item xs={0} sm={1}></Grid>
                <Grid item xs={13} sm={6}>
                  <UserDetailItem
                    title={{ en: "Username", cs: "Uživatelské jméno" }}
                    value={data.username}
                  />
                </Grid>
                <Grid item xs={13} sm={6}>
                  <UserDetailItem
                    title={{ en: "Email", cs: "E-mail" }}
                    value={
                      data.email &&
                      `${data.email.slice(0, 3) + "*".repeat(5)}@${
                        data.email.split("@")[1]
                      }`
                    }
                  />
                </Grid>
              </Grid>
            </Container>
          </>
        )}
      </Stack>
    </Container>
  );
};

export default UserDetails;
