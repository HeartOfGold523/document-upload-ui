"use client";
import { Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type WidgetButtonProps = {
  variant: "primary" | "secondary" | "closeIcon";
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const WidgetButton = ({
  variant,
  label,
  onClick,
}: WidgetButtonProps): JSX.Element => {
  return variant === "closeIcon" ? (
    <IconButton
      size="large"
      aria-label={label}
      sx={{ ...styles.baseButton, ...styles.primary, p: 1 }}
      onClick={onClick}
    >
      <CloseIcon fontSize="inherit" />
    </IconButton>
  ) : (
    <Button
      variant={variant === "primary" ? "contained" : "outlined"}
      sx={{ ...styles.baseButton, ...styles[variant] }}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

const styles = {
  baseButton: {
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "10px",
    textTransform: "capitalize",
    "& .MuiTouchRipple-ripple": {
      width: "100%!important",
      height: "100%!important",
      top: "0!important",
      left: "0!important",
      "& .MuiTouchRipple-child": {
        borderRadius: "10px",
        animation: "none",
      },
    },
  },
  primary: {
    backgroundColor: "navy",
    color: "white",
    borderColor: "navy",
    "&:hover": {
      backgroundColor: "white",
      color: "navy",
      borderColor: "navy",
    },
  },
  secondary: {
    color: "orange",
    borderColor: "orange",
    "&:hover": {
      backgroundColor: "orange",
      color: "white",
      borderColor: "orange",
    },
  },
};

export default WidgetButton;
