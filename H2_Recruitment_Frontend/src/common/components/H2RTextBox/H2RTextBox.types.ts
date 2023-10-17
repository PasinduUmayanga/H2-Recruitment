import { EnumTextBoxType } from "./H2RTextBox.enum";

export interface H2RTextBoxProps {
  Id?: string;
  Label?: string;
  Name: string;
  Value: string;
  Type: EnumTextBoxType;
  PlaceHolder?: string;
  MultiLine?: boolean;
  ClassName?: string;
  Required?: boolean;
  TextLength?: number;
  InputProps?: object; // set other property ex:- maxLength
  onTextBoxChange?: (name: string, value: string) => void; // text change
}
