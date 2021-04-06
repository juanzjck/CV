//import AsyncStorage from '@react-native-community/async-storage';
//import storage from 'redux-persist/lib/storage';
import { createStore } from "redux";

import combineReducers from './Reducers/index';

const store=createStore(
    combineReducers,
   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export {
    store
  };