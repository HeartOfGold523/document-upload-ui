"use client";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

type WidgetRadioItem = {
  label: string;
  value: string;
};

type WidgetRadioProps = {
  labelledBy: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  items: WidgetRadioItem[];
};

const WidgetRadio = ({
  labelledBy,
  value,
  onChange,
  items,
}: WidgetRadioProps): JSX.Element => {
  return (
    <FormControl sx={styles.formControl}>
      <RadioGroup
        row
        aria-labelledby={labelledBy}
        name="widget-radio-group"
        value={value}
        onChange={onChange}
      >
        {items.map((item, index) => (
          <FormControlLabel
            key={index}
            label={item.label}
            value={item.value}
            control={<Radio />}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

const styles = {
  formControl: {
    "& .MuiButtonBase-root.MuiRadio-root": {
      "&.Mui-checked": {
        color: "navy",
      },
      "&.Mui-focusVisible": {
        "& .MuiTouchRipple-ripple": {
          "& .MuiTouchRipple-child": { background: "#1976d2" },
        },
      },
    },
  },
};

export default WidgetRadio;
