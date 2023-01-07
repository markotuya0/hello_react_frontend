import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import greetingReducer from './greetings/greetingSlice';

const rootReducer = combineReducers({
  greetings: greetingReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
export default store;
