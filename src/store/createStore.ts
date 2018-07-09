import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';


import {appReducer, datasheetFoldersReducer, templateFoldersReducer, templateReducer, userReducer } from './reducers';

const enhancers: any = [];
let composeEnhancers = compose;

if (process.env.NODE_ENV === 'development') {
  if (
    typeof (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function'
  ) {
    composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  }
}

const allReducers = combineReducers({
  templates: templateReducer,
  user: userReducer,
  app : appReducer,
  templateFolders: templateFoldersReducer,
  datasheetFolders : datasheetFoldersReducer
});

const middleware = [thunk];
const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(...middleware), ...enhancers)
);

export default store;
