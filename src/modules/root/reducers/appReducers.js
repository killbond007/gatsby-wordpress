import { STARTUP, STARTUP_SUCCESS } from "../actions/appActions"

import initialState from "../../../store/initialState"

const appReducers = (state = initialState.app, { type, payload }) => {
  if (type.endsWith("FAILURE")) {
    return { ...state, error: payload.error }
  }

  switch (type) {
    case STARTUP:
      return { ...state, isReady: false }

    case STARTUP_SUCCESS:
      return { ...state, isReady: true }

    default:
      return state
  }
}

export default appReducers
