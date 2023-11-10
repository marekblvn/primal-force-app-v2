import { IconButton, Tooltip, useTheme } from "@mui/material";

const TooltipedButton = ({
  icon,
  tooltipText,
  tooltipPos = "left",
  enterDelay = 500,
  arrow = true,
  onClick,
  color,
  hoverColor,
  ...props
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
          color: color || theme.palette.secondary.light,
          "&:hover": {
            color: hoverColor || theme.palette.primary.main,
          },
        }}
        {...props}
        onClick={onClick}
      >
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default TooltipedButton;
