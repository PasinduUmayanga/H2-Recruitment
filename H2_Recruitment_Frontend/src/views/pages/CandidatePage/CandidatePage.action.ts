import { CandidateDTO } from "../../../common/types/common.dto.types";
export const SAVECANDIDATE = "SAVECANDIDATE";

export const saveCandidate = (candidate: CandidateDTO) => {
  return {
    type: SAVECANDIDATE,
    payload: { candidate },
  };
};
