export interface BaseDTO {
  FirstName: string;
  MiddleName: string;
  LastName: string;
  DBO: string;
}
export interface CandidateDTO extends BaseDTO {
  InterviewDate: string;
  Option1: boolean;
  Designation: number;
  Remark1: string;
  Remark2: string;
  Remark3: string;
}
