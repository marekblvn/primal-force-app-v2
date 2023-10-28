import { IconButton, Tooltip, useTheme } from "@mui/material";

const TooltipedButton = ({
  icon,
  tooltipText,
  tooltipPos = "left",
  enterDelay = 500,
  arrow = true,
  onClick,
  color = "primary",
}) => {
  const theme = useTheme();
  return (
    <Tooltip
      title={tooltipText}
      arrow={arrow}
      placement={tooltipPos}
      enterDelay={enterDelay}
    >
      <IconButton
        sx={{
          color: theme.palette.secondary.light,
          "&:hover": { color: theme.palette.primary.dark },
        }}
        onClick={onClick}
      >
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default TooltipedButton;
