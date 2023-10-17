import { useState, ChangeEvent } from "react";
import { EnumTextBoxType } from "./H2RTextBox.enum";
import { H2RTextBoxProps } from "./H2RTextBox.types";
import { Box, TextField } from "@mui/material";

const H2RTextBox = (props: H2RTextBoxProps) => {
  // State for keep value
  const [inputValue, setInputValue] = useState("");

  // On change event
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);

    if (props.onTextBoxChange) {
      props.onTextBoxChange(event.target.name, event.target.value);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "100ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <>
        <TextField
          id={props.Id}
          label={props.Label}
          name={props.Name}
          multiline={props.MultiLine}
          required={props.Required}
          type={
            props.MultiLine
              ? "text"
              : props.Type === EnumTextBoxType.Number
              ? "number"
              : props.Type === EnumTextBoxType.Password
              ? "password"
              : "text"
          }
          InputLabelProps={{
            shrink: true,
          }}
          onChange={onChange}
        ></TextField>
      </>
    </Box>
  );
};

export default H2RTextBox;
