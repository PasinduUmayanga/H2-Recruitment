import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root.saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: (state = {}, action) => state,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
