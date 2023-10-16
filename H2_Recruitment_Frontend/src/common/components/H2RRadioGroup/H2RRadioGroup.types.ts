export interface H2RRadioGroupProps {
  Id: string;
  Name: string;
  Value: string;
  Required?: boolean;
  InputProps?: object; // set other property ex:- maxLength
  ClassName: string;
  RadioButtonList: Array<RadioItemList>;
  onRadioGroupChange?: (Name: string, Value: string) => void;
}

export interface RadioItemList {
  Label: string;
  Value: string;
  Disabled?: boolean;
}
