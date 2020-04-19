import { delay } from "redux-saga";
import * as TYPES from "../types";
import { fetchColor } from "../actions";
import { call, put, takeLatest, all } from "redux-saga/effects";

function* mySaga() {
  yield takeLatest(TYPES.FETCH_COLORAPI_REQUEST, fetchColor);
}

export function* fetchContinuously(action) {
  yield put({ type: TYPES.FETCH_COLORAPI_REQUEST });

  yield call(delay, 2000);

  yield put({ type: TYPES.FETCH_CONTINUOUSLY });
}

function* actionWatcher() {
  yield takeLatest(TYPES.FETCH_CONTINUOUSLY, fetchContinuously);
}
export default function* rootSaga() {
  yield all([actionWatcher(), mySaga()]);
}
