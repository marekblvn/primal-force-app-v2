import { useTheme } from "@emotion/react";
import { Grow, IconButton, Popover, Stack } from "@mui/material";
import { useState } from "react";

const PopoverButton = ({ icon, children }) => {
  const theme = useTheme();
  const [anchor, setAnchor] = useState(null);
  const popoverOpen = Boolean(anchor);
  const handleOpenPopover = (e) => setAnchor(e.currentTarget);
  const handleClosePopover = () => setAnchor(null);

  return (
    <>
      <IconButton
        onClick={handleOpenPopover}
        sx={{
          color: popoverOpen
            ? theme.palette.secondary.light
            : theme.palette.white.main,
          "&:hover": { backgroundColor: theme.palette.primary.dark },
        }}
      >
        {icon}
      </IconButton>
      <Popover
        open={popoverOpen}
        onClose={handleClosePopover}
        anchorEl={anchor}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        TransitionComponent={Grow}
      >
        <Stack
          direction="column"
          spacing="8px"
          justifyContent="space-between"
          alignItems="center"
          padding={{ xs: "2px", sm: "6px" }}
        >
          {children}
        </Stack>
      </Popover>
    </>
  );
};

export default PopoverButton;
