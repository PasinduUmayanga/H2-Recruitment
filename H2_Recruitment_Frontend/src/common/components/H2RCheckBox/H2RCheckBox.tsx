import FormGroup from "@mui/material/FormGroup";
import { Checkbox, FormControlLabel } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { H2RCheckBoxProps } from "./H2RCheckBox.types";

const H2RCheckBox = (props: H2RCheckBoxProps) => {
  const [value, setValue] = useState(props.checked ? props.checked : false);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.checked);
    if (props.onCheckBoxChange)
      props.onCheckBoxChange(event.target.name, event.target.checked);
  };
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            id={props.Id}
            name={props.Name}
            checked={props.checked}
            required={props.Required}
            disabled={props.Disabled ? props.Disabled : false}
            onChange={onChange}
          ></Checkbox>
        }
        label={props.Label}
      />
    </FormGroup>
  );
};
export default H2RCheckBox;
