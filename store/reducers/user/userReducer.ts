import { Reducer } from 'redux';
import { REHYDRATE } from 'redux-persist';

import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAILURE,
  CHECK_USER_REQUEST,
  CHECK_USER_SUCCESS,
  CHECK_USER_FAILURE,
  SET_USER_TOKEN,
  AUTHENTICATE_USER,
  SET_USER_MOBILE,
  SET_USER_PASSWORD,
  LOGOUT_USER
} from "./actionTypes"

import { UserActions, UserState } from "./types"

export const initialUserState: UserState = {
  user: {
    id: "",
    display_name: "",
    email: "",
    email_verified: false,
    mobile: "",
    mobile_verified: false,
    photo_url: "",
    nid_front_image: "",
    nid_back_image: "",
  },
  token: "",
  error: "",
  loading: false,
  authenticated: false,
}

const reducers: Reducer<UserState> = (state = initialUserState, action: UserActions): UserState => {
  switch (action.type) {
    case REHYDRATE: {
      // Check if persisted state exists
      // if (action.payload) {
      //   return {
      //     ...state,
      //     user: { ...action.payload.user_state.user },
      //     token: action.payload.user_state.token,
      //     error: action.payload.user_state.error,
      //     loading: action.payload.user_state.loading,
      //     authenticated: action.payload.user_state.authenticated
      //   };
      // } else {
      //   return { ...state }
      // }
      return { ...state }

    };
    case LOGOUT_USER:
      return {
        ...state,
        authenticated: false,
        user: {
          id: "",
          display_name: "",
          email: "",
          email_verified: false,
          mobile: "",
          mobile_verified: false,
          photo_url: "",
          nid_front_image: "",
          nid_back_image: "",
        },
      };
    case SET_USER_MOBILE:
      return {
        ...state,
        user: {
          ...state.user,
          mobile: action.payload.mobile,
          mobile_verified: action.payload.mobile_verified,
        },

      };

    case SET_USER_TOKEN:
      return {
        ...state,
        token: action.payload.token,
      };
    case AUTHENTICATE_USER:
      return {
        ...state,
        authenticated: action.payload.authenticated,
      };
    case USER_SIGNIN_REQUEST:
      return {
        ...state,
        error: "",
        loading: true
      };

    case USER_SIGNIN_SUCCESS:
      return {
        ...state,
        user: { ...action.payload.user },
        token: action.payload.token,
        error: "",
        loading: false,
        authenticated: true,
      };

    case USER_SIGNIN_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false
      };


    case CHECK_USER_REQUEST:
      return {
        ...state,
        error: "",
        token: action.payload.token,
        loading: true
      };

    case CHECK_USER_SUCCESS:
      if (action.payload.status == true) {
        return {
          ...state,
          error: "",
          loading: false,
          authenticated: true,
        };
      } else {
        return {
          ...state,
          user: {
            id: "",
            display_name: "",
            email: "",
            email_verified: false,
            mobile: "",
            mobile_verified: false,
            photo_url: "",
            nid_front_image: "",
            nid_back_image: "",
          },
          token: "",
          error: "Authentication error",
          loading: false,
          authenticated: false,
        };
      }


    case CHECK_USER_FAILURE:
      return {
        ...state,
        user: {
          id: "",
          display_name: "",
          email: "",
          email_verified: false,
          mobile: "",
          mobile_verified: false,
          photo_url: "",
          nid_front_image: "",
          nid_back_image: "",
        },
        token: "",
        error: "Authentication error",
        loading: false,
        authenticated: false,
      };


    default:
      return {
        ...state,
      }
  }
}

export default reducers