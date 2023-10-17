export interface DropDownDTO {
  id: string;
  isMultiple?: boolean;
  options: Array<CommonDTO>;
}

export interface MovieDTO {
  getOptionLabel: (option: DropDownDTO) => void;
}
export interface CommonDTO {
  label: string;
  year: number;
}

export interface H2RDropDownSelectProps {}
