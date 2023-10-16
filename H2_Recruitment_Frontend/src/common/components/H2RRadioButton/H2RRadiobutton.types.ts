export interface H2RRadioButtonProps {
  Id?: string;
  Name: string;
  Label?: string;
  Value: string;
  Required?: boolean;
  Disabled?: boolean;
  InputProps?: object;
  ClassName: string;
  onRadioButtonChange?: (Name: string, Checked: boolean) => void;
}
