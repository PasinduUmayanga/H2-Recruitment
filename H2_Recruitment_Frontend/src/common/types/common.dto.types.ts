export interface BaseDTO {
  Id: number;
}
export interface CandidateDTO extends BaseDTO {
  FirstName: string;
  MiddleName: string;
  LastName: string;
  DBO: string;
  // InterviewDate: string;
  // Option1: boolean;
  // Designation: number;
  // Remark1: string;
  // Remark2: string;
  // Remark3: string;
}
