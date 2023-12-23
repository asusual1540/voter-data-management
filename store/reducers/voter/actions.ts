import {
  RESET_VOTER_STATE,
  SET_VOTERS,
} from "./actionTypes"


import {
  ResetVoterState,

  SetVoters,
  SetVotersPayload,

} from "./types"



export const resetVoterState = (): ResetVoterState => ({
  type: RESET_VOTER_STATE
})


export const setVoters = (payload: SetVotersPayload): SetVoters => ({
  type: SET_VOTERS,
  payload,
})
