import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAILURE,
  CHECK_USER_REQUEST,
  CHECK_USER_SUCCESS,
  CHECK_USER_FAILURE,
  SET_USER_TOKEN,
  SET_USER_MOBILE,
  SET_USER_PASSWORD,
  AUTHENTICATE_USER,
  LOGOUT_USER

} from "./actionTypes"


import {
  AuthenticateUser,
  AuthenticateUserPayload,

  SetUserMobile,
  SetUserMobilePayload,
  SetUserPassword,
  SetUserPasswordPayload,

  SetUserToken,
  SetUserTokenPayload,

  CheckUserRequest,
  CheckUserRequestPayload,
  CheckUserSuccess,
  CheckUserSuccessPayload,
  CheckUserFailure,
  CheckUserFailurePayload,


  UserSignInRequest,
  UserSignInRequestPayload,
  UserSignInSuccess,
  UserSignInSuccessPayload,
  UserSignInFailure,
  UserSignInFailurePayload,
  LogoutUser
} from "./types"



export const authenticateUser = (payload: AuthenticateUserPayload): AuthenticateUser => ({
  type: AUTHENTICATE_USER,
  payload,
})


export const setUserPassword = (payload: SetUserPasswordPayload): SetUserPassword => ({
  type: SET_USER_PASSWORD,
  payload,
})

export const setUserMobile = (payload: SetUserMobilePayload): SetUserMobile => ({
  type: SET_USER_MOBILE,
  payload,
})


export const setUserToken = (payload: SetUserTokenPayload): SetUserToken => ({
  type: SET_USER_TOKEN,
  payload,
})

export const checkUserRequest = (payload: CheckUserRequestPayload): CheckUserRequest => ({
  type: CHECK_USER_REQUEST,
  payload,
})
export const checkUserSuccess = (payload: CheckUserSuccessPayload): CheckUserSuccess => ({
  type: CHECK_USER_SUCCESS,
  payload,
})

export const checkUserFailure = (payload: CheckUserFailurePayload): CheckUserFailure => ({
  type: CHECK_USER_FAILURE,
  payload,
})

export const userSignInRequest = (payload: UserSignInRequestPayload): UserSignInRequest => ({
  type: USER_SIGNIN_REQUEST,
  payload,
})
export const userSignInSuccess = (payload: UserSignInSuccessPayload): UserSignInSuccess => ({
  type: USER_SIGNIN_SUCCESS,
  payload,
})

export const userSignInFailure = (payload: UserSignInFailurePayload): UserSignInFailure => ({
  type: USER_SIGNIN_FAILURE,
  payload,
})

export const logoutUser = (): LogoutUser => ({
  type: LOGOUT_USER
})

