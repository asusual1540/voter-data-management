import { REHYDRATE } from 'redux-persist';

import {
  TOGGLE_SIDEBAR,
  SHOW_PANEL,
  TOGGLE_SUB_PANEL,
  TOGGLE_THEME,
  TOGGLE_SIDEBAR_FLOATING,
  SET_USER_DEVICE
} from "./actionTypes";


export enum PanelSlug {

  LOGIN = "লগইন",
  SEARCH = "সার্চ",
  VOTER = "ভোটার",
  SLIP = "স্লীপ",
  LOGOUT = " লগআউট",
}

export enum UserDevice {
  MOBILE = "MOBILE",
  TABLET = "TABLET",
  DESKTOP = "DESKTOP",
}


export interface Panel {
  index: number;
  name: string;
  slug: PanelSlug;
  icon: string;
  shown: boolean;
  submenuShown: boolean;
}

export interface SettingState {
  id: string;
  device: UserDevice;
  error: string | null;
  loading: boolean;
  sidebar: boolean;
  sidebar_floating: boolean;
  panels: Panel[];
  theme: string;
}


export interface RehydratePayload {
  setting_state: SettingState
}


export type ToggleSidebar = {
  type: typeof TOGGLE_SIDEBAR;
}



export type ToggleSidebarFloating = {
  type: typeof TOGGLE_SIDEBAR_FLOATING;
}


export type Rehydrate = {
  type: typeof REHYDRATE,
  payload: RehydratePayload,
};



export type ShowPanel = {
  type: typeof SHOW_PANEL;
  payload: ShowPanelPayload;
}

export interface ShowPanelPayload {
  panel: Panel;
}


export type SetUserDevice = {
  type: typeof SET_USER_DEVICE;
  payload: SetUserDevicePayload;
}

export interface SetUserDevicePayload {
  device: UserDevice;
}


export type ToggleSubPanel = {
  type: typeof TOGGLE_SUB_PANEL;
  payload: ToggleSubPanelPayload;
}

export interface ToggleSubPanelPayload {
  panel: Panel;
}



export type ToggleTheme = {
  type: typeof TOGGLE_THEME;
  payload: ToggleThemePayload;
}

export interface ToggleThemePayload {
  theme: string;
}


export type SettingActions =
  | ToggleSidebar
  | ToggleSidebarFloating
  | ShowPanel
  | SetUserDevice
  | ToggleSubPanel
  | ToggleTheme
  | Rehydrate;
