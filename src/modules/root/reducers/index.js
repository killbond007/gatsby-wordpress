import { combineReducers } from "redux"

import appReducers from "./appReducers"

export default combineReducers({
  app: appReducers,
})
