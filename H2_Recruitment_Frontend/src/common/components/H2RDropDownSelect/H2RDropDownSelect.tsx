import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { DropDownDTO } from "./H2RDropDownSelect.types";
import { Grid } from "@mui/material";

const H2RDropDownSelect = (props: DropDownDTO) => {
  const [value, setValue] = useState<Array<string>>(["Value"]);

  const addValue = () => {
    setValue([...value]);
  };

  // const selectedValues = React.useMemo(
  //   () => allValues.filter((v) => v.selected),
  //   [allValues]
  // );
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <div>
            <div>
              <h3>Selected Values: {value}</h3>
            </div>
            {props.isMultiple ? (
              <div style={{ padding: "12px" }}>
                <Autocomplete
                  limitTags={3}
                  id={props.id}
                  multiple
                  onChange={addValue}
                  options={props.options}
                  // sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Movie" />
                  )}
                />
              </div>
            ) : (
              <div style={{ padding: "12px" }}>
                <Autocomplete
                  id={props.id}
                  disableClearable
                  options={props.options}
                  onChange={addValue}
                  // sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Movie" />
                  )}
                />
              </div>
            )}
          </div>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </>
  );
};

export default H2RDropDownSelect;
