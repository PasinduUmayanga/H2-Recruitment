import { TextField } from "@mui/material";
import React, { ChangeEvent } from "react";
import { H2RTextAreaProps } from "./H2RTextArea.types";
import { EnumTextAreaType } from "./H2RTextArea.enum";

const H2RTextArea = (props: H2RTextAreaProps) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (props.onTextAreaChange)
      props.onTextAreaChange(event.target.name, event.target.value);
  };

  return (
    <>
      <TextField
        fullWidth
        id={props.Id}
        name={props.Name}
        multiline
        value={props.Value}
        label={props.Label}
        type={props.Type === EnumTextAreaType.Text ? "text" : ""}
        required={props.Required}
        disabled={props.Disabled ? props.Disabled : false}
        onChange={onChange}
        error={props.Error}
        helperText={props.HelperText}
        inputProps={props.InputProps}
        autoComplete="off"
        className={props.ClassName} //check prop disable
        InputLabelProps={{ shrink: true }}
      />
    </>
  );
};

export default H2RTextArea;
