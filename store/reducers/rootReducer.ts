import { combineReducers } from "redux";


import userReducer from "./user/userReducer";
import settingReducer from "./setting/settingReducer";
import postReducer from "./post/postReducer";



const rootReducer = combineReducers({
  user_state: userReducer,
  setting_state: settingReducer,
  post_state: postReducer,
});

export type ApplicationState = ReturnType<typeof rootReducer>;


export default rootReducer;