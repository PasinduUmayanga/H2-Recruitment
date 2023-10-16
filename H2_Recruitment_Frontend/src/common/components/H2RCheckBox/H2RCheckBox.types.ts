export interface H2RCheckBoxProps {
  Id?: string;
  Name: string;
  Label?: string;
  checked?: boolean;
  Required?: boolean;
  Disabled?: boolean;
  InputProps?: object; // set other property ex:- maxLength
  ClassName?: string;
  onCheckBoxChange?: (Name: string, checked: boolean) => void;
}
