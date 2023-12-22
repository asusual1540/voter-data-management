import { REHYDRATE } from 'redux-persist';

import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAILURE,
  SET_USER_TOKEN,
  SET_USER_PASSWORD,
  AUTHENTICATE_USER,
  SET_USER_MOBILE,
  LOGOUT_USER,
  CHECK_USER_REQUEST,
  CHECK_USER_SUCCESS,
  CHECK_USER_FAILURE
} from "./actionTypes";



export interface User {
  id: string;
  display_name: string;
  email?: string;
  email_verified?: boolean;
  mobile: string;
  mobile_verified: boolean;
  photo_url?: string;
  nid_front_image?: string;
  nid_back_image?: string;
}

export interface UserLoginData {
  username: string;
  password: string;
}

export interface UserState {
  user: User;
  token: string;
  error: string;
  loading: boolean;
  authenticated: boolean;
}


export interface RehydratePayload {
  user_state: UserState
}



export type UserSignInRequest = {
  type: typeof USER_SIGNIN_REQUEST;
  payload: UserSignInRequestPayload;
}
export interface UserSignInRequestPayload {
  token: string;
}



export type SetUserToken = {
  type: typeof SET_USER_TOKEN;
  payload: SetUserTokenPayload;
}
export interface SetUserTokenPayload {
  token: string;
}


export type SetUserPassword = {
  type: typeof SET_USER_PASSWORD;
  payload: SetUserPasswordPayload;
}
export interface SetUserPasswordPayload {
  password: string;
}



export type AuthenticateUser = {
  type: typeof AUTHENTICATE_USER;
  payload: AuthenticateUserPayload;
}
export interface AuthenticateUserPayload {
  authenticated: boolean;
}


export type SetUserMobile = {
  type: typeof SET_USER_MOBILE;
  payload: SetUserMobilePayload;
}
export interface SetUserMobilePayload {
  mobile: string;
  mobile_verified: false;
}



export type CheckUserRequest = {
  type: typeof CHECK_USER_REQUEST;
  payload: CheckUserRequestPayload;
}
export interface CheckUserRequestPayload {
  token: string;
}


export type CheckUserSuccess = {
  type: typeof CHECK_USER_SUCCESS;
  payload: CheckUserSuccessPayload;
}

export interface CheckUserSuccessPayload {
  status: boolean
}


export type CheckUserFailure = {
  type: typeof CHECK_USER_FAILURE;
  payload: CheckUserFailurePayload;
}
export interface CheckUserFailurePayload {
  error: string;
}


export type UserSignInSuccess = {
  type: typeof USER_SIGNIN_SUCCESS;
  payload: UserSignInSuccessPayload;
}
export interface UserSignInSuccessPayload {
  user: User;
  token: string;
}


export type UserSignInFailure = {
  type: typeof USER_SIGNIN_FAILURE;
  payload: UserSignInFailurePayload;
}
export interface UserSignInFailurePayload {
  error: string;
}

export type LogoutUser = {
  type: typeof LOGOUT_USER;
}



export type Rehydrate = {
  type: typeof REHYDRATE,
  payload: RehydratePayload,
};




export type UserActions =
  | UserSignInRequest
  | UserSignInSuccess
  | UserSignInFailure
  | LogoutUser
  | SetUserToken
  | SetUserPassword
  | AuthenticateUser
  | SetUserMobile
  | CheckUserRequest
  | CheckUserSuccess
  | CheckUserFailure
  | Rehydrate;
