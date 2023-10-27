import { CandidateDTO } from "../../../common/types/common.dto.types";
import { ActionResponseType } from "../../../common/types/common.types";
import axios, { AxiosError } from "axios";

// Client object for Axios calls to the backend
const client = axios.create({
  baseURL: "https://localhost:7110/api/H2R/",
});

export const saveCandidate = async (
  candidate: CandidateDTO
): Promise<ActionResponseType> => {
  try {
    const URL: string = "SaveCandidate";

    let result: ActionResponseType = {} as ActionResponseType;
    await client
      .post<ActionResponseType>(URL, candidate)
      .then((response) => {
        result = response.data;
      })
      .catch((error: AxiosError) => {
        return error;
      });

    return result;
  } catch (error) {
    throw error;
  }
};
