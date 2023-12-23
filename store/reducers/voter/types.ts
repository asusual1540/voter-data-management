import { REHYDRATE } from 'redux-persist';

import {
  RESET_VOTER_STATE,
  SET_VOTERS,
} from "./actionTypes";



export interface Voter {
  id: string
  name: string;
  voter_no: string;
  father_name: string;
  mother_name: string;
  occupation: string;
  address: string;
  gender: string;
  district: string;
  sub_district: string;
  city_corporation: string;
  union: string;
  ward_no: number;
  voter_area: string;
}

export interface TableColumnData {
  name: string;
  uid: string;
  sortable?: boolean;
}

export interface VoterState {
  voters: Voter[];
  columns: TableColumnData[];
  error: string;
  loading: boolean;
}





export type ResetVoterState = {
  type: typeof RESET_VOTER_STATE;
}




export type SetVoters = {
  type: typeof SET_VOTERS;
  payload: SetVotersPayload;
}

export interface SetVotersPayload {
  voters: Voter[];
}



export type Rehydrate = {
  type: typeof REHYDRATE,
  payload: RehydratePayload,
};

export interface RehydratePayload {
  voter_state: VoterState
}



export type VoterActions =
  | ResetVoterState
  | SetVoters
  | Rehydrate;


