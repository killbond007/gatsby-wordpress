export const STARTUP = "STARTUP"
export const STARTUP_SUCCESS = "STARTUP_SUCCESS"
export const STARTUP_FAILURE = "STARTUP_FAILURE"

export const startup = () => ({
  type: STARTUP,
})

export const startupSuccess = () => ({
  type: STARTUP_SUCCESS,
})

export const startupFailure = err => ({
  type: STARTUP_FAILURE,
  payload: {
    error: err && err.toString(),
  },
})
