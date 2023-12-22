import { Reducer } from 'redux';
import { REHYDRATE } from 'redux-persist';


import {
  TOGGLE_SIDEBAR,
  TOGGLE_SIDEBAR_FLOATING,
  SHOW_PANEL,
  TOGGLE_SUB_PANEL,
  TOGGLE_THEME,
  SET_USER_DEVICE
} from "./actionTypes"

import { SettingActions, SettingState, PanelSlug, UserDevice } from "./types"



export const initialSettingState: SettingState = {
  id: "1",
  error: '',
  loading: false,
  device: UserDevice["DESKTOP"],
  sidebar: false,
  sidebar_floating: false,
  theme: "light",
  panels: [
    {
      index: 0,
      name: "সার্চ",
      slug: PanelSlug["SEARCH"],
      icon: '/static/images/sidebar/list-check.svg',
      shown: false,
      submenuShown: false
    },
    {
      index: 1,
      name: "লগইন",
      slug: PanelSlug["LOGIN"],
      icon: '/static/images/sidebar/list-check.svg',
      shown: true,
      submenuShown: false
    },
    {
      index: 2,
      name: "ভোটার",
      slug: PanelSlug["VOTER"],
      icon: '/static/images/sidebar/list-check.svg',
      shown: false,
      submenuShown: false
    },
    {
      index: 3,
      name: "স্লীপ",
      slug: PanelSlug["slip"],
      icon: '/static/images/sidebar/list-check.svg',
      shown: false,
      submenuShown: false
    },

    {
      index: 4,
      name: "লগআউট",
      slug: PanelSlug["LOGOUT"],
      icon: '/static/images/sidebar/list-check.svg',
      shown: false,
      submenuShown: false
    },
  ]
}

const reducers: Reducer<SettingState> = (state = initialSettingState, action: SettingActions): SettingState => {
  switch (action.type) {
    case REHYDRATE: {
      // Check if persisted state exists
      // if (action.payload) {
      //   return {
      //     ...state,
      //     error: action.payload.setting_state.error,
      //     loading: action.payload.setting_state.loading,
      //     id: action.payload.setting_state.id,
      //   };
      // } else {
      //   return { ...state }
      // }
      return { ...state }

    };

    case TOGGLE_THEME:
      return {
        ...state,
        error: "",
        loading: false,
        theme: action.payload.theme,
      };


    case TOGGLE_SIDEBAR:
      return {
        ...state,
        error: "",
        loading: false,
        sidebar: !state.sidebar,
      };

    case TOGGLE_SIDEBAR_FLOATING:
      return {
        ...state,
        error: "",
        loading: false,
        sidebar_floating: !state.sidebar_floating,
      };


    case SET_USER_DEVICE:
      return {
        ...state,
        device: action.payload.device
      };


    case SHOW_PANEL:
      let all_panels = state.panels.map((panel, index) => {
        if (index == action.payload.panel.index) {
          panel.shown = true
          return panel
        } else {
          panel.shown = false
          return panel
        }

      })


      return {
        ...state,
        error: "",
        loading: false,
        panels: [...all_panels],
      };


    case TOGGLE_SUB_PANEL:
      let all_panels_for_sub_panel = [...state.panels]
      all_panels_for_sub_panel[action.payload.panel.index].submenuShown = !action.payload.panel.submenuShown
      return {
        ...state,
        error: "",
        loading: false,
        panels: [...all_panels_for_sub_panel],
      };



    default:
      return {
        ...state,
      }
  }
}

export default reducers