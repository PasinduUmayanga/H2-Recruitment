import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { H2RRadioGroupProps } from "./H2RRadioGroup.types";
import { ChangeEvent } from "react";

const H2RRadioGroup = (props: H2RRadioGroupProps) => {
  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (props.onRadioGroupChange) {
      props.onRadioGroupChange(event.target.name, event.target.value);
    }
  };

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name={props.Name}
        value={props.Value}
        onChange={handleRadioChange}
      >
        {props.RadioButtonList.map((item, index) => {
          return (
            <FormControlLabel
              key={index}
              value={item.Value}
              control={
                <Radio disabled={item.Disabled ? item.Disabled : false} />
              }
              label={item.Label}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default H2RRadioGroup;
