import { EnumDatePickerType } from "./H2RDatePicker.enum";
import dayjs from "dayjs";

export interface H2RDatePickerProps {
  Id?: string;
  Label: string;
  Value: string;
  Type?: EnumDatePickerType;
  Name: string;
  Disabled?: boolean;
  DefaultValue?: string;
  Required?: boolean;
  onDateChange?: (name: string, date: string) => void;
  IsDisabledDate?: (currentdate: dayjs.Dayjs) => boolean;
}
