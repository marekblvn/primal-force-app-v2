import { IconButton, Tooltip } from "@mui/material";

const TooltipedButton = ({
  icon,
  tooltipText,
  tooltipPos = "bottom",
  arrow = true,
  onClick,
}) => {
  return (
    <Tooltip title={tooltipText} arrow={arrow} placement={tooltipPos}>
      <IconButton onClick={onClick}>{icon}</IconButton>
    </Tooltip>
  );
};

export default TooltipedButton;
