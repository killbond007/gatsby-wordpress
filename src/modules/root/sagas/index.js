import { fork } from "redux-saga/effects"

import { startupSaga as appStartupSaga } from "./appSagas"

export default function*() {
  yield fork(appStartupSaga)
}
