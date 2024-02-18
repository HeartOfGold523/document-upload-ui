"use client";
import { FormControlLabel, Switch } from "@mui/material";

type WidgetSwitchProps = {
  label: React.ReactNode;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const WidgetSwitch = ({
  label,
  checked,
  onChange,
}: WidgetSwitchProps): JSX.Element => {
  return (
    <FormControlLabel
      control={<Switch onChange={onChange} />}
      label={label}
      checked={checked}
      sx={styles.formControl}
    />
  );
};

const styles = {
  formControl: {
    width: "100%",
    flexDirection: { xs: "column", sm: "row" },
    alignItems: { xs: "flex-start", sm: "center" },
    "& .MuiSwitch-root": {
      p: "7px",
    },
    "& .MuiSwitch-switchBase": {
      "& .MuiSwitch-thumb": {
        background: "white",
      },
      "& + .MuiSwitch-track": {
        height: "24px",
        borderRadius: "10px",
      },
      "&.Mui-checked": {
        "& + .MuiSwitch-track": {
          background: "navy",
          opacity: 1,
        },
      },
      "&.Mui-focusVisible": {
        color: "#1976d2",
      },
    },
    "& .MuiTypography-root": {
      width: "100%",
      display: "inline-flex",
      flexWrap: "wrap",
      alignItems: { xs: "flex-start", sm: "center" },
      gap: 1,
      fontFamily: "inherit",
      p: { xs: "7px", sm: 0 },
    },
  },
};

export default WidgetSwitch;
