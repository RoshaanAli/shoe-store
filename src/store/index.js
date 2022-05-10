import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import shoesRed from '../store/reducers/shoesRed'

const reducers = combineReducers({shoesRed});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(ReduxThunk))
);

export default store;
