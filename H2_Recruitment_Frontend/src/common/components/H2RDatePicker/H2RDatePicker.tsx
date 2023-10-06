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
      {props.Type === EnumDatePickerType.DateOnly ? (
        <>
          {" "}
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              label={props.Label}
              value={date ?? null}
              onChange={(newDate) => {
                if (newDate !== null) {
                  OnChangeDate(newDate, "DD-MM-YYYY");
                } else {
                  // OnChangeDate(null, "DD-MM-YYYY");
                }
              }}
              format="DD-MM-YYYY"
            />
          </DemoContainer>
        </>
      ) : (
        ""
      )}
    </LocalizationProvider>
  );
};

export default H2RDatePicker;
