import React, { ChangeEvent, useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { EnumDatePickerType } from "./H2RDatePicker.enum";
import { H2RDatePickerProps } from "./H2RDatePicker.types";
import dayjs, { Dayjs } from "dayjs";

const H2RDatePicker = (props: H2RDatePickerProps) => {
  let date: Dayjs | null = dayjs(props.Value);

  const OnChangeDate = (value: dayjs.Dayjs, format: string) => {
    // debugger;
    if (props.onDateChange) {
      props.onDateChange(
        props.Name,
        value !== undefined ? dayjs(value).format(format) : ""
      );
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          label={props.Label}
          onChange={(DBODate: Dayjs | null) => {
            if (DBODate !== null) {
              OnChangeDate(DBODate, "DD-MM-YYYY");
            } else {
            }
          }}
          format="DD-MM-YYYY"
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default H2RDatePicker;
