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
  SET_POST_ADDITIONAL_SERVICE_COST,
} from "./actionTypes"


import {
  ResetPostState,

  SetPostServiceCost,
  SetPostServiceCostPayload,

  SetPostAdditionalServiceCost,
  SetPostAdditionalServiceCostPayload,

  SetPostRecipient,
  SetPostRecipientPayload,

  SetPostSender,
  SetPostSenderPayload,

  SetPostDelivery,
  SetPostDeliveryPayload,

  SetPostWeight,
  SetPostWeightPayload,

  SetPostActiveService,
  SetPostActiveServicePayload,

  SetPostActiveAdditionalService,
  SetPostActiveAdditionalServicePayload,

  SetPostActivePage,
  SetPostActivePagePayload,
  SetPostActiveLibraryName,
  SetPostActiveLibraryNamePayload,
  SetPostActiveDocumentId,
  SetPostActiveDocumentIdPayload,
} from "./types"



export const resetPostState = (): ResetPostState => ({
  type: RESET_POST_STATE
})


export const setPostActiveLibraryName = (payload: SetPostActiveLibraryNamePayload): SetPostActiveLibraryName => ({
  type: SET_POST_ACTIVE_LIBRARY_NAME,
  payload,
})

export const setPostActiveDocumentId = (payload: SetPostActiveDocumentIdPayload): SetPostActiveDocumentId => ({
  type: SET_POST_ACTIVE_DOCUMENT_ID,
  payload,
})

export const setPostActivePage = (payload: SetPostActivePagePayload): SetPostActivePage => ({
  type: SET_POST_ACTIVE_PAGE,
  payload,
})



export const setPostRecipient = (payload: SetPostRecipientPayload): SetPostRecipient => ({
  type: SET_POST_RECIPIENT,
  payload,
})

export const setPostSender = (payload: SetPostSenderPayload): SetPostSender => ({
  type: SET_POST_SENDER,
  payload,
})

export const setPostDelivery = (payload: SetPostDeliveryPayload): SetPostDelivery => ({
  type: SET_POST_DELIVERY,
  payload,
})



export const setPostWeight = (payload: SetPostWeightPayload): SetPostWeight => ({
  type: SET_POST_WEIGHT,
  payload,
})

export const setPostActiveService = (payload: SetPostActiveServicePayload): SetPostActiveService => ({
  type: SET_POST_ACTIVE_SERVICE,
  payload,
})

export const setPostActiveAdditionalService = (payload: SetPostActiveAdditionalServicePayload): SetPostActiveAdditionalService => ({
  type: SET_POST_ACTIVE_ADDITIONAL_SERVICE,
  payload,
})



export const setPostServiceCost = (payload: SetPostServiceCostPayload): SetPostServiceCost => ({
  type: SET_POST_SERVICE_COST,
  payload,
})


export const setPostAdditionalServiceCost = (payload: SetPostAdditionalServiceCostPayload): SetPostAdditionalServiceCost => ({
  type: SET_POST_ADDITIONAL_SERVICE_COST,
  payload,
})
