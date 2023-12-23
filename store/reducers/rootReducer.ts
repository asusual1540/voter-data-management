import { combineReducers } from "redux";


import userReducer from "./user/userReducer";
import settingReducer from "./setting/settingReducer";
import voterReducer from "./voter/voterReducer";



const rootReducer = combineReducers({
  user_state: userReducer,
  setting_state: settingReducer,
  voter_state: voterReducer,
});

export type ApplicationState = ReturnType<typeof rootReducer>;


export default rootReducer;