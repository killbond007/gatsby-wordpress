import { put } from "redux-saga/effects"

import { startup, startupFailure, startupSuccess } from "../actions/appActions"

export function* startupSaga() {
  try {
    yield put(startup())
    yield put(startupSuccess())
  } catch (err) {
    yield put(startupFailure(err))
  }
}
