import { useTheme } from "@emotion/react";
import { IconButton, Popover, Stack, useMediaQuery } from "@mui/material";
import { useState } from "react";

const PopoverButton = ({ icon, children }) => {
  const theme = useTheme();
  const shouldBeCollapsed = useMediaQuery(theme.breakpoints.down("md"));
  const [anchor, setAnchor] = useState(null);
  const popoverOpen = Boolean(anchor);
  const handleOpenPopover = (e) => setAnchor(e.currentTarget);
  const handleClosePopover = () => setAnchor(null);

  return (
    <>
      <IconButton onClick={handleOpenPopover}>{icon}</IconButton>
      <Popover
        open={popoverOpen}
        onClose={handleClosePopover}
        anchorEl={anchor}
        anchorOrigin={{
          vertical: shouldBeCollapsed ? "bottom" : "bottom",
          horizontal: shouldBeCollapsed ? "center" : "right",
        }}
        transformOrigin={{
          vertical: shouldBeCollapsed ? "top" : "top",
          horizontal: shouldBeCollapsed ? "center" : "right",
        }}
      >
        <Stack direction={shouldBeCollapsed ? "column" : "row"}>
          {children}
        </Stack>
      </Popover>
    </>
  );
};

export default PopoverButton;
