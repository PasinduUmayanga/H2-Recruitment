import { FormControlLabel, Radio } from "@mui/material";
import { H2RRadioButtonProps } from "./H2RRadiobutton.types";
import { ChangeEvent } from "react";

const H2RRadioButton = (props: H2RRadioButtonProps) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (props.onRadioButtonChange)
      props.onRadioButtonChange(event.target.name, event.target.checked);
  };

  return (
    <>
      <FormControlLabel
        value={props.Value}
        label={props.Label}
        control={
          <Radio
            id={props.Id}
            name={props.Name}
            required={props.Required ? props.Required : false}
            disabled={props.Disabled ? props.Disabled : false}
            onChange={onChange}
            className={props.ClassName}
          ></Radio>
        }
        className={props.ClassName}
      />
    </>
  );
};

export default H2RRadioButton;
