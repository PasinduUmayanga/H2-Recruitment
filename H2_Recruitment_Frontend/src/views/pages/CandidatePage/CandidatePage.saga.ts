import { takeEvery, call, all } from "@redux-saga/core/effects";
import { saveCandidate } from "./CandidatePage.api";
import { SAVECANDIDATE } from "./CandidatePage.action";
import { AnyAction } from "redux";
import { ActionResponseType } from "../../../common/types/common.types";

const SaveDataWatcher = function* (): any {
  yield takeEvery(SAVECANDIDATE, function* (action: AnyAction) {
    const { candidate } = action.payload;
    try {
      const result: ActionResponseType = yield call(() =>
        saveCandidate(candidate)
      );
      console.log(result);
    } catch (error) {
      throw error;
    }
  });
};

const candidateSaga = function* () {
  yield all([SaveDataWatcher()]);
};

export default candidateSaga;
