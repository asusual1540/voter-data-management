import {
  TOGGLE_SIDEBAR,
  SHOW_PANEL,
  TOGGLE_SUB_PANEL,
  TOGGLE_THEME,
  TOGGLE_SIDEBAR_FLOATING,
  SET_USER_DEVICE
} from "./actionTypes"


import {
  ToggleSidebar,
  ShowPanel,
  ShowPanelPayload,
  SetUserDevice,
  SetUserDevicePayload,
  ToggleSubPanel,
  ToggleSubPanelPayload,
  ToggleTheme,
  ToggleThemePayload,
  ToggleSidebarFloating,
} from "./types"



export const toggleSidebar = (): ToggleSidebar => ({
  type: TOGGLE_SIDEBAR
})

export const setUserDevice = (payload: SetUserDevicePayload): SetUserDevice => ({
  type: SET_USER_DEVICE,
  payload
})

export const showPanel = (payload: ShowPanelPayload): ShowPanel => ({
  type: SHOW_PANEL,
  payload
})

export const toggleSubPanel = (payload: ToggleSubPanelPayload): ToggleSubPanel => ({
  type: TOGGLE_SUB_PANEL,
  payload
})

export const toggleTheme = (payload: ToggleThemePayload): ToggleTheme => ({
  type: TOGGLE_THEME,
  payload
})

export const toggleSidebarFloating = (): ToggleSidebarFloating => ({
  type: TOGGLE_SIDEBAR_FLOATING
})



