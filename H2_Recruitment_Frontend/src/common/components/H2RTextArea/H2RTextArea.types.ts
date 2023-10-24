import { EnumTextAreaType } from "./H2RTextArea.enum";

export interface H2RTextAreaProps {
  Id?: string;
  Label: string;
  Name?: string;
  Value: any;
  Type?: EnumTextAreaType;
  Required?: boolean;
  Disabled?: boolean;
  Error?: boolean;
  HelperText?: string;
  InputProps?: object; // set other property ex:- maxLength
  ClassName?: string;
  onTextAreaChange?: (name: string, value: string) => void;
}
