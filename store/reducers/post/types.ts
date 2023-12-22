import { REHYDRATE } from 'redux-persist';

import {
  RESET_POST_STATE,
  SET_POST_ACTIVE_PAGE,
  SET_POST_ACTIVE_LIBRARY_NAME,
  SET_POST_ACTIVE_DOCUMENT_ID,
  SET_POST_RECIPIENT,
  SET_POST_SENDER,
  SET_POST_DELIVERY,
  SET_POST_WEIGHT,
  SET_POST_ACTIVE_SERVICE,
  SET_POST_ACTIVE_ADDITIONAL_SERVICE,
  SET_POST_SERVICE_COST,
  SET_POST_ADDITIONAL_SERVICE_COST
} from "./actionTypes";


export interface ServiceInfo {
  Item_Type: string;
  Measured_On: string;
  Lower_limit: string;
  Upper_Limit: string;
  Maximum_Limit_Value: string;
  Charge: string;
  Charge_Type: string;
  GEP_Charge: string;
  Registry_Charge: string;
  AD_Charge: string;
  Intimation_Charge: string;
  Next_Every_Additional: string;
  Next_Every_Additional_Charge: string;
  POD_Charge: string;
}

export interface PostCostInfo {
  letter: ServiceInfo[];
  book_packet: ServiceInfo[];
  document: ServiceInfo[];
  parcel: ServiceInfo[];
}

export interface PostService {
  cost: number;
  name: string;
  label: string;
}


export interface PostStep {
  label: string;
}

export interface Person {
  district: string;
  subDistrict: string;
  address: string;
  phoneNumber: string;
}
export interface Delivery {
  deliveryType: string;
  deliveryInstruction: string;
  pickUpAddress: string;
}


export interface PostState {
  weight: number;
  info: PostCostInfo;
  steps: PostStep[];
  activeStepIndex: number;

  services: PostService[];
  activeServiceIndex: number;
  serviceCost: number;

  additionalServices: PostService[];
  additionalServiceIndex: number;
  additionalServiceCost: number;

  totalCost: number;
  sender: Person;
  recipient: Person;

  delivery: Delivery;

  error: string;
  loading: boolean;
}




export interface RehydratePayload {
  post_state: PostState
}


export type ResetPostState = {
  type: typeof RESET_POST_STATE;
}




export type SetPostActiveLibraryName = {
  type: typeof SET_POST_ACTIVE_LIBRARY_NAME;
  payload: SetPostActiveLibraryNamePayload;
}

export interface SetPostActiveLibraryNamePayload {
  library_index: number;
}



export type SetPostActiveDocumentId = {
  type: typeof SET_POST_ACTIVE_DOCUMENT_ID;
  payload: SetPostActiveDocumentIdPayload;
}

export interface SetPostActiveDocumentIdPayload {
  document_index: number;
}



export type SetPostActivePage = {
  type: typeof SET_POST_ACTIVE_PAGE;
  payload: SetPostActivePagePayload;
}

export interface SetPostActivePagePayload {
  page_index: number;
}


export type SetPostRecipient = {
  type: typeof SET_POST_RECIPIENT;
  payload: SetPostRecipientPayload;
}

export interface SetPostRecipientPayload {
  recipient: Person;
}


export type SetPostSender = {
  type: typeof SET_POST_SENDER;
  payload: SetPostSenderPayload;
}

export interface SetPostSenderPayload {
  sender: Person;
}



export type SetPostDelivery = {
  type: typeof SET_POST_DELIVERY;
  payload: SetPostDeliveryPayload;
}

export interface SetPostDeliveryPayload {
  delivery: Delivery;
}


export type SetPostWeight = {
  type: typeof SET_POST_WEIGHT;
  payload: SetPostWeightPayload;
}

export interface SetPostWeightPayload {
  weight: number;
}


export type SetPostActiveService = {
  type: typeof SET_POST_ACTIVE_SERVICE;
  payload: SetPostActiveServicePayload;
}

export interface SetPostActiveServicePayload {
  index: number;
}


export type SetPostActiveAdditionalService = {
  type: typeof SET_POST_ACTIVE_ADDITIONAL_SERVICE;
  payload: SetPostActiveAdditionalServicePayload;
}

export interface SetPostActiveAdditionalServicePayload {
  index: number;
}




export type SetPostServiceCost = {
  type: typeof SET_POST_SERVICE_COST;
  payload: SetPostServiceCostPayload;
}

export interface SetPostServiceCostPayload {
  cost: number;
}


export type SetPostAdditionalServiceCost = {
  type: typeof SET_POST_ADDITIONAL_SERVICE_COST;
  payload: SetPostAdditionalServiceCostPayload;
}

export interface SetPostAdditionalServiceCostPayload {
  cost: number;
}


export type Rehydrate = {
  type: typeof REHYDRATE,
  payload: RehydratePayload,
};



export type PostActions =
  | ResetPostState
  | SetPostActiveLibraryName
  | SetPostActiveDocumentId
  | SetPostActivePage
  | SetPostRecipient
  | SetPostSender
  | SetPostDelivery
  | SetPostWeight
  | SetPostServiceCost
  | SetPostAdditionalServiceCost
  | SetPostActiveService
  | SetPostActiveAdditionalService
  | Rehydrate;


