import { Reducer } from 'redux';
import { REHYDRATE } from 'redux-persist';

import {
  RESET_VOTER_STATE,
  SET_VOTERS,
} from "./actionTypes"

import { VoterActions, VoterState } from "./types"


export const initialVoterState: VoterState = {
  voters: [],
  columns: [
    { name: "ID", uid: "id", sortable: true },
    { name: "NAME", uid: "name" },
    { name: "DOWNLOAD", uid: "download" },
    { name: "VOTER_NO", uid: "voter_no" },
    { name: "FATHER_NAME", uid: "father_name" },
    { name: "MOTHER_NAME", uid: "mother_name" },
    { name: "OCCUPATION", uid: "occupation", sortable: true },
    { name: "ADDRESS", uid: "address" },
    { name: "GENDER", uid: "gender", sortable: true },
    { name: "DISTRICT", uid: "district", sortable: true },
    { name: "SUB_DISTRICT", uid: "sub_district", sortable: true },
    { name: "CITY_CORPORATION", uid: "city_corporation", sortable: true },
    { name: "UNION", uid: "union", sortable: true },
    { name: "WARD_NO", uid: "ward_no" },
    { name: "VOTER_AREA", uid: "voter_area", sortable: true },
    { name: "ACTIONS", uid: "actions" },
  ],
  error: "",
  loading: false,

}

const reducers: Reducer<VoterState> = (state = initialVoterState, action: VoterActions): VoterState => {
  switch (action.type) {
    case REHYDRATE: {
      // Check if persisted state exists
      // if (action.payload) {
      //   return {
      //     ...state,
      //     error: action.payload.voter_state.error,
      //     loading: action.payload.voter_state.loading,
      //     voterData: action.payload.voter_state.voterData,
      //     libraries: action.payload.voter_state.libraries,
      //     documents: action.payload.voter_state.documents,
      //     activeLibrary: action.payload.voter_state.activeLibrary,
      //     activeDocumentIndex: action.payload.voter_state.activeDocumentIndex,
      //     activeDocument: action.payload.voter_state.activeDocument,
      //     activePage: action.payload.voter_state.activePage,
      //   };
      // } else {
      //   return { ...state }
      // }
      return { ...state }
    };

    case RESET_VOTER_STATE:
      return {
        ...state,
      };

    case SET_VOTERS:
      return {
        ...state,
        voters: action.payload.voters
      };



    default:
      return {
        ...state,
      }
  }
}

export default reducers