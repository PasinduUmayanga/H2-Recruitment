import { all, fork } from "@redux-saga/core/effects";
import candidateSaga from "../../views/pages/CandidatePage/CandidatePage.saga";

// ==============================|| REDUX - ROOT SAGA ||============================== //
const rootSaga = function* () {
  yield all([fork(candidateSaga)]);
};
export default rootSaga;
