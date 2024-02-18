"use client";
import { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

type WidgetSelectItem = {
  label: string;
  value: string | number;
};

type WidgetSelectProps = {
  label: string;
  value: string | number;
  onChange: (e: SelectChangeEvent<string | number>) => void;
  items: WidgetSelectItem[];
  boldLabel?: boolean;
};

const WidgetSelect = ({
  label,
  value,
  onChange,
  items,
  boldLabel,
}: WidgetSelectProps): JSX.Element => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <FormControl sx={styles.formControl}>
      <InputLabel
        id={`widget-select-label-${label}`}
        sx={boldLabel ? { fontWeight: "bold" } : undefined}
      >
        {label}
      </InputLabel>
      <Select
        labelId={`widget-select-label-${label}`}
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        label={label}
        value={value}
        onChange={onChange}
        sx={styles.select}
      >
        {items.map((item, index) => (
          <MenuItem key={index} value={item.value} sx={styles.menuItem}>
            {item.value === "" ? <em>{item.label}</em> : item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const styles = {
  formControl: {
    width: "100%",
    "& .MuiFormLabel-root.MuiInputLabel-root": {
      color: "navy",
    },
  },
  select: {
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: "10px",
    },
    "&.Mui-focused": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "navy",
      },
    },
  },
  menuItem: {
    color: "navy",
  },
};

export default WidgetSelect;
