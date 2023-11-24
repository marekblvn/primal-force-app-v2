import { IconButton, Stack, Typography, useTheme } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Lsi from "./Lsi";

const UserDetailItem = ({ title, value, onClick }) => {
  const theme = useTheme();
  return (
    <>
      <Stack direction="row" justifyContent="flex-start">
        <Typography
          fontFamily="Red Hat Display, sans-serif"
          color={theme.palette.primary.main}
          fontWeight={700}
          fontSize={{ xs: "11px", md: "14px", xl: "16px" }}
        >
          <Lsi lsi={title} />
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <Typography
          fontFamily="Red Hat Display, sans-serif"
          fontSize={{ xs: "11px", md: "14px", xl: "16px" }}
          color={theme.palette.black.main}
        >
          {value}
        </Typography>
        <IconButton
          sx={{
            width: { xs: "21px", sm: "24px" },
            height: { xs: "21px", sm: "24px" },
            color: theme.palette.secondary.light,
            border: `solid 1px ${theme.palette.secondary.light}`,
            borderRadius: { xs: "2px", sm: "4px", xl: "8px" },
            "&:hover": {
              color: theme.palette.white.main,
              backgroundColor: theme.palette.secondary.dark,
              borderColor: theme.palette.secondary.dark,
            },
          }}
        >
          <EditIcon
            sx={{
              height: { xs: "18px", sm: "21px" },
              width: { xs: "18px", sm: "21px" },
            }}
          />
        </IconButton>
      </Stack>
    </>
  );
};

export default UserDetailItem;
