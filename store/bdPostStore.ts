import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';



import reducers from './reducers/rootReducer';





const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['patient_state', 'auth_state', 'parameter_state', 'mode_state', 'settings_state'],
  stateReconciler: autoMergeLevel2,
};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const persistedReducer = persistReducer(persistConfig, reducers);

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const bdPostStore = createStore(
  persistedReducer,
  undefined,
  composeEnhancers(),
);


const persistor = persistStore(bdPostStore);

export { bdPostStore, persistor };